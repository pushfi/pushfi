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
        // add user
        addUser: builder.mutation({
            query: (body) => {
                return {
                    url: "/backend/admin/add-user",
                    method: "POST",
                    body,
                };
            },
        }),

        // add user
        editUser: builder.mutation({
            query: (body) => {
                return {
                    url: `/backend/admin/edit-user/${body.userId}`,
                    method: "PUT",
                    body,
                };
            },
        }),

        // add video
        addVideo: builder.mutation({
            query: (body) => {
                return {
                    url: `/backend/admin/add-video`,
                    method: "POST",
                    body,
                };
            },
        }),
        // delete video
        deleteVideo: builder.mutation({
            query: (body) => {
                return {
                    url: `/backend/admin/delete-video/${body.videoId}`,
                    method: "DELETE",
                };
            },
        }),

        // delete photo
        deletePhoto: builder.mutation({
            query: (body) => {
                return {
                    url: `/backend/admin/delete-photo/${body.photoId}`,
                    method: "DELETE",
                };
            },
        }),

        addPhoto: builder.mutation({
            query: (body) => {
                return {
                    url: `/backend/admin/add-photo`,
                    method: "POST",
                    body,
                };
            },
        }),
        updateServices: builder.mutation({
            query: (body) => {
                return {
                    url: `/backend/admin/update-services`,
                    method: "POST",
                    body,
                };
            },
        }),
    }),
});

export const {
    useFetchBurnInforQuery,
    useAddPhotoMutation,
    useAddUserMutation,
    useEditUserMutation,
    useAddVideoMutation,
    useDeleteVideoMutation,
    useDeletePhotoMutation,
    useUpdateServicesMutation,
} = burnApiSllice;
