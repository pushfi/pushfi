import { apiSlice } from "../apiSlice";

export const midasApiSllice = apiSlice.injectEndpoints({
    // define endpoints
    endpoints: (builder) => ({
        fetchMidasInfor: builder.query({
            query: (body) => {
                return `/backend/midas/fetch-midas-data/${body.id}`;
            },
        }),
        addMidasBrand: builder.mutation({
            query: (body) => {
                return {
                    url: `/backend/broker/add-broker`,
                    method: "POST",
                    body,
                };
            },
        }),
        fetchMidasForms: builder.query({
            query: (body) => {
                return `/backend/midas/fetch-brand-form/${body.id}`;
            },
        }),
    }),
});

export const {
    useFetchMidasInforQuery,
    useAddMidasBrandMutation,
    useFetchMidasFormsQuery,
} = midasApiSllice;
