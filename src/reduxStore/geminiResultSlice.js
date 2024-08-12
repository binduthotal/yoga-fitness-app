import { createSlice } from "@reduxjs/toolkit";

const geminiResultSlice = createSlice({
    name:'geminiResults',
    initialState: {
        yogaNames:null,
    },
    reducers:{
        addGeminiResults:(state,action) => {
            state.yogaNames = action.payload;
        }
    }
})

export const {addGeminiResults} = geminiResultSlice.actions;
export default geminiResultSlice.reducer;