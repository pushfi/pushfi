import express from "express";
import postCorporateGrind from "../controllers/assessment-completion/corporate-grind/postCorporateGrind";
import fetchCorporateGind from "../controllers/assessment-completion/corporate-grind/fetchCorporateGrind";
import postDirectIdeaPros from "../controllers/assessment-completion/direct-idea-pros-quick-touch/postDirectIdeaPros";
import fetchDirectIdeaPros from "../controllers/assessment-completion/direct-idea-pros-quick-touch/fetchDirectIdeaPros";
const assessmentRoutes = express.Router();

// corporate grind routes
assessmentRoutes.post("/corporate-grind", postCorporateGrind);
assessmentRoutes.get("/corporate-grind/:id", fetchCorporateGind);

// direct idea pros quick touch
assessmentRoutes.post("/direct-idea-pros-quick-touch", postDirectIdeaPros);
assessmentRoutes.get("/direct-idea-pros-quick-touch/:id", fetchDirectIdeaPros);

export default assessmentRoutes;
