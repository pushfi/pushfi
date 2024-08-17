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
    }),
});

export const {
    useFetchCorporateGrindQuery,
    useFetchDirectIdeaProsQuery,
    useFetchEmpireCapitalQuery,
    useFetchEtnaCapitalQuery,
    useFetchHlpCreditSolutionsQuery,
    useFetchIdeaCreditSolutionsQuery,
} = assessmentDataApiSllice;
