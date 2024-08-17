import express from "express";
import postCorporateGrind from "../controllers/assessment-completion/corporate-grind/postCorporateGrind";
import fetchCorporateGind from "../controllers/assessment-completion/corporate-grind/fetchCorporateGrind";
import postDirectIdeaPros from "../controllers/assessment-completion/direct-idea-pros-quick-touch/postDirectIdeaPros";
import fetchDirectIdeaPros from "../controllers/assessment-completion/direct-idea-pros-quick-touch/fetchDirectIdeaPros";
import postEmpireCapital from "../controllers/assessment-completion/empire-capital-quick-touch/postEmpireCapital";
import fetchEmpireCapital from "../controllers/assessment-completion/empire-capital-quick-touch/fetchEmpireCapital";
import postEtnaCapital from "../controllers/assessment-completion/etna-capital-quick-touch/postEtnaCapital";
import fetchEtnaCapital from "../controllers/assessment-completion/etna-capital-quick-touch/fetchEtnaCapital";
import postHlpCreditSoulutions from "../controllers/assessment-completion/hlp-credit-solutions-ripefunding/postHlpCreditSoulutions";
import fetchHlpCreditSoulutions from "../controllers/assessment-completion/hlp-credit-solutions-ripefunding/fetchHlpCreditSoulutions";
import postIdeaCreditSolutions from "../controllers/assessment-completion/idea-credit-solutions-ripefunding/postIdeaCreditSolutions";
import fetchIdeaCreditSolutions from "../controllers/assessment-completion/idea-credit-solutions-ripefunding/fetchIdeaCreditSolutions";
const assessmentRoutes = express.Router();

// corporate grind routes
assessmentRoutes.post("/corporate-grind", postCorporateGrind);
assessmentRoutes.get("/corporate-grind/:id", fetchCorporateGind);

// direct idea pros quick touch
assessmentRoutes.post("/direct-idea-pros-quick-touch", postDirectIdeaPros);
assessmentRoutes.get("/direct-idea-pros-quick-touch/:id", fetchDirectIdeaPros);
// direct idea pros quick touch
assessmentRoutes.post("/empire-capital-quick-touch", postEmpireCapital);
assessmentRoutes.get("/empire-capital-quick-touch/:id", fetchEmpireCapital);

// direct Etna capital Advisors
assessmentRoutes.post("/etna-capital-quick-touch", postEtnaCapital);
assessmentRoutes.get("/etna-capital-quick-touch/:id", fetchEtnaCapital);

// Hlp credit solutions
assessmentRoutes.post(
    "/hlp-credit-solutions-ripefunding",
    postHlpCreditSoulutions
);
assessmentRoutes.get(
    "/hlp-credit-solutions-ripefunding/:id",
    fetchHlpCreditSoulutions
);

// Idea credit solutions
assessmentRoutes.post(
    "/idea-credit-solutions-ripefunding",
    postIdeaCreditSolutions
);
assessmentRoutes.get(
    "/idea-credit-solutions-ripefunding/:id",
    fetchIdeaCreditSolutions
);

export default assessmentRoutes;
