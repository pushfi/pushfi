import express from "express";
import createBurnsData from "../controllers/burns/createBurnsData";
import apiKeyMiddleware from "../middleware/apikeyMiddleware";
import fetchBurndata from "../controllers/burns/fetchBurnData";

const burnsRoutes = express.Router();

burnsRoutes.post("/create-burns-data", createBurnsData);
burnsRoutes.get("/fetch-burn-data/:id", apiKeyMiddleware, fetchBurndata);

export default burnsRoutes;
