import { apiSlice } from "../apiSlice";

export const assessmentDataApiSllice = apiSlice.injectEndpoints({
    // define endpoints
    endpoints: (builder) => ({
        // fetch users
        fetchCorporateGrind: builder.query({
            query: (body) => {
                return `/backend/assessment/corporate-grind/${body.id}`;
            },
        }),
    }),
});

export const { useFetchCorporateGrindQuery } = assessmentDataApiSllice;
