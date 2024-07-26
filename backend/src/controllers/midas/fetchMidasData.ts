import { RequestHandler } from "express";
import midasData from "../../model/midas";

const fetchMidasdata: RequestHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const burndata = await midasData.findOne({ fundindDataId: id });

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

export default fetchMidasdata;
