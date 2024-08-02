import multer from "multer";
import midasBrand from "../../model/midasBrand";
import path from "path";
import fs from "fs";
import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import sendFormEmail from "./sendFormEmail";
import sendFormSms from "./sendFormSms";

// Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        const uniqueFilename = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null, uniqueFilename);
    },
});

const upload = multer({ storage }).fields([
    { name: "logoimage", maxCount: 1 },
    { name: "w9image", maxCount: 1 },
]);

type ImageFieldName = "w9image" | "logoimage";

const createMidasBranding: RequestHandler = async (req, res, next) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error("Multer error:", err);
            return res.status(400).json({ message: "Error uploading files" });
        }

        // Check if files were uploaded
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ message: "No files were uploaded" });
        }

        const imageData: Record<ImageFieldName, string | null> = {
            w9image: null,
            logoimage: null,
        };

        try {
            for (const fieldName in req.files) {
                const file = (req.files as any)[fieldName][0];
                const uploadsDir = path.join(__dirname, "../../../uploads");
                const filePath = path.join(uploadsDir, file.filename);

                // Check if the file exists
                if (!fs.existsSync(filePath)) {
                    console.error(`File not found: ${filePath}`);
                    return res.status(500).json({
                        message: "Error saving file to server",
                        details:
                            "File was not found after upload. Please try again.",
                    });
                }

                imageData[fieldName as ImageFieldName] = `${file.filename}`;
            }

            const newListing = await midasBrand.create({
                ...req.body,
                brandId: uuidv4(),
                ...imageData,
            });
            const makeRequest = await axios.post(
                "https://hook.us1.make.com/ft7wnses4kz1jn398ouke8xkpvfcphb1",
                newListing
            );

            sendFormEmail(req.body.email, newListing.brandId);
            sendFormSms(req.body.phone, newListing.brandId);

            return res.status(200).json(newListing);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Error saving data to database",
            });
        }
    });
};

export default createMidasBranding;
