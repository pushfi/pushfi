import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: 1,
};

export const midasSlice = createSlice({
    name: "public",
    initialState,
    reducers: {
        setpage: (state, action) => {
            state = { ...state, page: action.payload };
            return state;
        },
    },
});

export const { setpage } = midasSlice.actions;
export default midasSlice.reducer;
