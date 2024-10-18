import express from "express";
import apiKeyMiddleware from "../middleware/apikeyMiddleware";
import fetchSmsList from "../controllers/admin/fetchSmsList";

const adminRoutes = express.Router();

adminRoutes.get("/fetch-sms-list", apiKeyMiddleware, fetchSmsList);

export default adminRoutes;
