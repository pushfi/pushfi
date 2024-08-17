import { apiSlice } from "../apiSlice";

export const assessmentDataApiSllice = apiSlice.injectEndpoints({
    // define endpoints
    endpoints: (builder) => ({
        // fetch corporate grind
        fetchCorporateGrind: builder.query({
            query: (body) => {
                return `/backend/assessment/corporate-grind/${body.id}`;
            },
        }),

        // fetch direct ideas pro
        fetchDirectIdeaPros: builder.query({
            query: (body) => {
                return `/backend/assessment/direct-idea-pros-quick-touch/${body.id}`;
            },
        }),

        // fetch empire capital
        fetchEmpireCapital: builder.query({
            query: (body) => {
                return `/backend/assessment/empire-capital-quick-touch/${body.id}`;
            },
        }),

        // fetch etna capital adivisors
        fetchEtnaCapital: builder.query({
            query: (body) => {
                return `/backend/assessment/etna-capital-quick-touch/${body.id}`;
            },
        }),

        // fetch hlp credit solutions
        fetchHlpCreditSolutions: builder.query({
            query: (body) => {
                return `/backend/assessment/hlp-credit-solutions-ripefunding/${body.id}`;
            },
        }),
        // fetch Idea-credit-solutions
        fetchIdeaCreditSolutions: builder.query({
            query: (body) => {
                return `/backend/assessment/idea-credit-solutions-ripefunding/${body.id}`;
            },
        }),

        // fetch ripe funding
        fetchRipeFunding: builder.query({
            query: (body) => {
                return `/backend/assessment/ripefunding/${body.id}`;
            },
        }),
        // fetch Sean Smith James Loser Midas
        fetchSeanSmithJames: builder.query({
            query: (body) => {
                return `/backend/assessment/sean-smith-james-loser-midas/${body.id}`;
            },
        }),

        // fetch skycraper capital
        fetchSkyCraperCapital: builder.query({
            query: (body) => {
                return `/backend/assessment/skyscraper-capital/${body.id}`;
            },
        }),

        // fetch skycraper capital
        fetchSkywayMidas: builder.query({
            query: (body) => {
                return `/backend/assessment/skyway-midas/${body.id}`;
            },
        }),

        // fetch skycraper capital
        fetchVetureBoostCapital: builder.query({
            query: (body) => {
                return `/backend/assessment/ventureboost-capital/${body.id}`;
            },
        }),

        // fetch skycraper capital
        fetchWebhookSolaries: builder.query({
            query: (body) => {
                return `/backend/assessment/webhook-solaries/${body.id}`;
            },
        }),
    }),
});

export const {
    useFetchCorporateGrindQuery,
    useFetchDirectIdeaProsQuery,
    useFetchEmpireCapitalQuery,
    useFetchEtnaCapitalQuery,
    useFetchHlpCreditSolutionsQuery,
    useFetchIdeaCreditSolutionsQuery,
    useFetchRipeFundingQuery,
    useFetchSeanSmithJamesQuery,
    useFetchSkyCraperCapitalQuery,
    useFetchSkywayMidasQuery,
    useFetchVetureBoostCapitalQuery,
    useFetchWebhookSolariesQuery,
} = assessmentDataApiSllice;
