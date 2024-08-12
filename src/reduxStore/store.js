import { configureStore } from "@reduxjs/toolkit";
import geminiReducer from "./geminiResultSlice";
import ApiReducer from "./yogaApiSlice";

const store = configureStore({
    reducer: {
        geminiResults:geminiReducer,
        yogaApiresults: ApiReducer,
    }
})

export default store;