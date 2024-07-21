import express from "express";
import testController from "../controllers/public/testController";

const publicRoutes = express.Router();
publicRoutes.get("/test", testController);
export default publicRoutes;
