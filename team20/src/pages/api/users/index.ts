import { db } from "@/lib/db";
import { User } from "@/types/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  try {
    console.log(req.body);
    const newUser: User = JSON.parse(req.body);
    db.connect();
    db.query(
      "INSERT INTO Users VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        newUser.User_ID,
        newUser.Username,
        newUser.User_Type,
        newUser.F_Name,
        newUser.L_Name,
        newUser.Points,
      ],
      (e: any, r: any, f: any) => {
        res.status(200).json(r);
      }
    );
    db.end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};
