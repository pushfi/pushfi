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
        // fetch corporate grind
        fetchDirectIdeaPros: builder.query({
            query: (body) => {
                return `/backend/assessment/direct-idea-pros-quick-touch/${body.id}`;
            },
        }),
    }),
});

export const { useFetchCorporateGrindQuery, useFetchDirectIdeaProsQuery } =
    assessmentDataApiSllice;
