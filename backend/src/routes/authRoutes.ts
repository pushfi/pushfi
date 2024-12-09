import express from "express";
import apiKeyMiddleware from "../middleware/apikeyMiddleware";
import login from "../controllers/auth/login";

const authRoutes = express.Router();
authRoutes.post("/login", apiKeyMiddleware, login);

export default authRoutes;
