import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    feedback: "loading",
};

export const publicSlice = createSlice({
    name: "public",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state = { ...state, loading: action.payload };
            return state;
        },
        setFeedback: (state, action) => {
            state = { ...state, feedback: action.payload };
            return state;
        },
    },
});

export const { setFeedback, setLoading } = publicSlice.actions;
export default publicSlice.reducer;
