import {db} from "@/lib/db";
import { Application } from "@/types/application";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    try {
        console.log(req.body);
        const newApplication: Application = req.body;
        db.connect( (err) => {
            if (err) throw err;
            db.query("INSERT INTO Applications VALUES (?, ?, ?, ?)", 
            [
                newApplication.Application_ID,
                newApplication.Time_Submitted,
                newApplication.Application_Status,
                newApplication.Application_Document
            ], (error: any, results: any, fields: any) => {
                if (error) throw error;
                return res.status(200).json(results);
            });
        });
    } catch (e) {
        console.log(e);
        return res.status(500).end();
    }
}