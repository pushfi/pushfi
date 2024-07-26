import express from "express";
import createMidasData from "../controllers/midas/createMidasData";
import apiKeyMiddleware from "../middleware/apikeyMiddleware";
import fetchMidasdata from "../controllers/midas/fetchMidasData";

const midasRoutes = express.Router();

midasRoutes.post("/create-midas-data", createMidasData);
midasRoutes.get("/fetch-midas-data/:id", apiKeyMiddleware, fetchMidasdata);

export default midasRoutes;
