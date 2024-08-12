import { createSlice } from "@reduxjs/toolkit";

const yogaApiSlice = createSlice({
    name:"yogaSlice",
    initialState: {
        yogaApiResult:null,
    },
    reducers: {
        addApiResults: (state, action) => {
            state.yogaApiResult = action.payload;
        }

    }
})

export const {addApiResults} =  yogaApiSlice.actions;
export default yogaApiSlice.reducer;