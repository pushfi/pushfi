import express from "express";
import testController from "../controllers/public/testController";
import imageDisplay from "../controllers/public/imageDisplay";

const publicRoutes = express.Router();
publicRoutes.get("/test", testController);
publicRoutes.get("/photo-display/:url", imageDisplay);
export default publicRoutes;
