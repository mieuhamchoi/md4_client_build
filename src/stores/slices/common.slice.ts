import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
    name: "common",
    initialState: {
        count: 0
    },
    reducers: {
        increment: function(state, action) {
            state.count++;
        }
    }
})

export const commonAction = {
    ...commonSlice.actions
}

export const commonReducer = commonSlice.reducer