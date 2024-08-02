import express from "express";
import createMidasData from "../controllers/midas/createMidasData";
import apiKeyMiddleware from "../middleware/apikeyMiddleware";
import fetchMidasdata from "../controllers/midas/fetchMidasData";
import createMidasBranding from "../controllers/midas/createMidasBranding";
import fetchForms from "../controllers/midas/fetchForms";

const midasRoutes = express.Router();

midasRoutes.post("/create-midas-data", createMidasData);
midasRoutes.get("/fetch-midas-data/:id", apiKeyMiddleware, fetchMidasdata);
midasRoutes.post("/create-midas-brand", apiKeyMiddleware, createMidasBranding);
midasRoutes.get("/fetch-brand-form/:brandId", apiKeyMiddleware, fetchForms);

export default midasRoutes;
