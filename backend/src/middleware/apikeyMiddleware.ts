import { Request, Response, NextFunction } from "express";

const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = process.env.BACKEND_API_KEY as string;
    const providedApiKey = req.headers.authorization || req.query.apiKey;

    const token = (providedApiKey as string)?.split(" ")[1];

    if (providedApiKey && providedApiKey === apiKey) {
        // Valid API key, continue processing the request
        next();
    } else {
        // Invalid API key or missing API key, send a 401 Unauthorized response and return immediately
        return res.status(401).json({ message: "Unauthorized" });
    }
};

export default apiKeyMiddleware;
