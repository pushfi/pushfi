"use client";
import { configureStore } from "@reduxjs/toolkit";
import midasReducer from "./slices/midas/midasSlice";
import publicReducer from "./slices/public/publicSlice";
import { apiSlice } from "./slices/apiSlice";
export const makeStore = () => {
    return configureStore({
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,
            midasStates: midasReducer,
            publicStates: publicReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([apiSlice.middleware]),

        devTools: true,
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
