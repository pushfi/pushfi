import { apiSlice } from "../apiSlice";

export const midasApiSllice = apiSlice.injectEndpoints({
    // define endpoints
    endpoints: (builder) => ({
        // fetch users
        fetchMidasInfor: builder.query({
            query: (body) => {
                return `/backend/midas/fetch-midas-data/${body.id}`;
            },
        }),
        addMidasBrand: builder.mutation({
            query: (body) => {
                return {
                    url: `/backend/midas/create-midas-brand`,
                    method: "POST",
                    body,
                };
            },
        }),
    }),
});

export const { useFetchMidasInforQuery, useAddMidasBrandMutation } =
    midasApiSllice;
