import { apiSlice } from "../apiSlice";

export const burnApiSllice = apiSlice.injectEndpoints({
    // define endpoints
    endpoints: (builder) => ({
        // fetch users
        fetchBurnInfor: builder.query({
            query: (body) => {
                return `/backend/burn/fetch-burn-data/${body.id}`;
            },
        }),
    }),
});

export const { useFetchBurnInforQuery } = burnApiSllice;
