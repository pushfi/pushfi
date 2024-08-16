import { RequestHandler } from "express";
import Assessment from "../../../model/assessment";

const fetchCorporateGind: RequestHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const burndata = await Assessment.findOne({ fundindDataId: id });
        if (!burndata) {
            res.status(404).json({ message: "data with this id is not found" });
        } else {
            res.status(200).json(burndata);
        }
    } catch (error) {
        console.log(error);
        res.status(5000).json({
            message: "internal error occured please try gain later",
        });
    }
};

export default fetchCorporateGind;
