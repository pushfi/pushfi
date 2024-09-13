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
import postRipeFunding from "../controllers/assessment-completion/ripefunding/postRipeFunding";
import fetchRipeFunding from "../controllers/assessment-completion/ripefunding/fetchRipeFunding";
import postSeanSmith from "../controllers/assessment-completion/sean-smith-james-loser-midas/postSeanSmith";
import fetchSeanSMith from "../controllers/assessment-completion/sean-smith-james-loser-midas/fetchSeanSMith";
import postSkyCraperCapital from "../controllers/assessment-completion/skycraper-capital/postSkyCraperCapital";
import fetchSkyCraperCapita from "../controllers/assessment-completion/skycraper-capital/fetchSkyCraperCapita";
import postSkywayMidas from "../controllers/assessment-completion/skyway-midas/postSkywayMidas";
import fetchSkywayMidas from "../controllers/assessment-completion/skyway-midas/fetchSkywayMidas";
import postVentureBoostCapital from "../controllers/assessment-completion/ventureboost-capital/postVentureBoostCapital";
import fetchVentureBoostCapital from "../controllers/assessment-completion/ventureboost-capital/fetchVentureBoostCapital";
import postWebhookSolaries from "../controllers/assessment-completion/webhook-solaries/postWebhookSolaries";
import fetchWebhookSolaries from "../controllers/assessment-completion/webhook-solaries/fetchWebhookSolaries";
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

// Ripe funding
assessmentRoutes.post("/ripefunding", postRipeFunding);
assessmentRoutes.get("/ripefunding/:id", fetchRipeFunding);

// Sean Smith
assessmentRoutes.post("/sean-smith-james-loser-midas", postSeanSmith);
assessmentRoutes.get("/sean-smith-james-loser-midas/:id", fetchSeanSMith);

// Skycrape capital
assessmentRoutes.post("/skyway-midas", postSkywayMidas);
assessmentRoutes.get("/skyway-midas/:id", fetchSkywayMidas);

// ventureboost capital
assessmentRoutes.post("/ventureboost-capital", postVentureBoostCapital);
assessmentRoutes.get("/ventureboost-capital/:id", fetchVentureBoostCapital);

// ventureboost capital
assessmentRoutes.post("/webhook-solaries", postWebhookSolaries);
assessmentRoutes.get("/webhook-solaries/:id", fetchWebhookSolaries);

// ventureboost capital
assessmentRoutes.post("/skyscraper-capital", postSkyCraperCapital);
assessmentRoutes.get("/skyscraper-capital/:id", fetchSkyCraperCapita);
export default assessmentRoutes;
