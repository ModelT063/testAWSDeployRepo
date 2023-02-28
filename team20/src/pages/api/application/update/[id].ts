import {db} from "@/lib/db";
import { Application } from "@/types/application";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "PUT") {
        res.setHeader("Allow", ["PUT"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    try {
        console.log(req.body);
        const updatedApplication: Application = req.body;
        db.connect( (err) => {
            if (err) throw err;
            db.query("UPDATE Applications SET Time_Submitted = ?, Application_Status = ?, " + 
            " Application_Document = ? WHERE Application_ID = ?", 
            [
                updatedApplication.Time_Submitted,
                updatedApplication.Application_Status,
                updatedApplication.Application_Document,
                parseInt(req.query.id as string)
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