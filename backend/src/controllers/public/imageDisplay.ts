import { RequestHandler } from "express";
import fs from "fs";
import path from "path";

const imageDisplay: RequestHandler = (req, res) => {
    const { url } = req.params; // Assuming URL contains the image filename

    const imagePath = path.join(
        __dirname,
        "../../../uploads", // Adjust the path as needed
        url as string
    );

    // Check if the image exists
    fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(err);

            return res.status(404).send("Image not found");
        }

        // Get image information (size, type)
        fs.stat(imagePath, (err, stats) => {
            if (err) {
                console.error("Error getting image stats:", err);
                return res.status(500).send("Internal Server Error");
            }

            res.writeHead(200, {
                "Content-Type": `image/${path.extname(imagePath).slice(1)}`, // Determine content type
                "Content-Length": stats.size,
            });

            // Stream the image data to the client
            fs.createReadStream(imagePath).pipe(res);
        });
    });
};

export default imageDisplay;
