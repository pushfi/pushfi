import { apiSlice } from "../apiSlice";

export const midasApiSllice = apiSlice.injectEndpoints({
    // define endpoints
    endpoints: (builder) => ({
        // fetch users
        fetchMidasInfor: builder.query({
            query: (body) => {
                console.log(body);

                return `/backend/midas/fetch-midas-data/${body.id}`;
            },
        }),
    }),
});

export const { useFetchMidasInforQuery } = midasApiSllice;
