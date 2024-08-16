import express from "express";
import postCorporateGrind from "../controllers/assessment-completion/corporate-grind/postCorporateGrind";
import fetchCorporateGind from "../controllers/assessment-completion/corporate-grind/fetchCorporateGrind";
const assessmentRoutes = express.Router();

// corporate grind routes
assessmentRoutes.post("/corporate-grind", postCorporateGrind);
assessmentRoutes.get("/corporate-grind/:id", fetchCorporateGind);

export default assessmentRoutes;
