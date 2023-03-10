import {db} from "@/lib/db";
import { User, UserType, UserStatus } from "@/types/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async(req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  try {
    console.log(req.body);
    const newUser: User = req.body;
    db.connect( (err) => {
      if (err) throw err;
      db.query("INSERT INTO Users VALUES (?, ?, ?, ?, ?, ?, ?)", [
        newUser.User_ID,
        newUser.Email,
        newUser.User_Type,
        newUser.User_Status,
        newUser.F_Name,
        newUser.L_Name,
        newUser.Points
      ], (error: any, results: any, fields: any) => {
        if (error) throw error;
        return res.status(200).json(results);
      });
    });
  } catch (e) {
    console.log(e);
    return res.status(500).end();
  }
};