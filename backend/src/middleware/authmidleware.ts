import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        let token: string | undefined;

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            try {
                // Get token from header
                token = req.headers.authorization.split(" ")[1];

                // Verify token
                const decoded = jwt.verify(
                    token,
                    process.env.JWT_SECRET as string
                ) as jwt.JwtPayload;
                next();
            } catch (error) {
                console.log(error);
                res.status(401);
                throw new Error("Not authorized");
            }
        }

        if (!token) {
            res.status(401);
            throw new Error("Not authorized, no token");
        }

        next();
    }
);

export { protect };
