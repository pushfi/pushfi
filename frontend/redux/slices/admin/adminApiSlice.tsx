import { apiSlice } from "../apiSlice";

export const adminApiSllice = apiSlice.injectEndpoints({
    // define endpoints
    endpoints: (builder) => ({
        // fetch fetch sms list data
        fetchSmsList: builder.query({
            query: () => {
                return `/backend/admin/fetch-sms-list`;
            },
        }),
    }),
});

export const { useFetchSmsListQuery } = adminApiSllice;
