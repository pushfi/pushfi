import { RequestHandler } from "express";
import assessment from "../../model/assessment";

const fetchSmsList: RequestHandler = async (req, res) => {
    try {
        const smslist = await assessment.find({}).sort({ createdAt: -1 }); // Sort by createdAt in descending order
        res.status(200).json(smslist);
    } catch (error) {
        res.status(500).json({
            message: "internal error occured, please try gain later",
        });
    }
};

export default fetchSmsList;
