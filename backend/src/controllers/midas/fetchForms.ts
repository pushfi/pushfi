import { RequestHandler } from "express";
import midasBrand from "../../model/midasBrand";

const fetchForms: RequestHandler = async (req, res) => {
    const { brandId } = req.params;
    try {
        const brandResult = await midasBrand.findOne({ brandId });
        if (brandResult) {
            return res.status(200).json(brandResult);
        } else {
            return res.status(200).json({ message: "brand form not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal error occured" });
    }
};

export default fetchForms;
