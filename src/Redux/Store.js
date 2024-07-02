import { configureStore } from "@reduxjs/toolkit";
import checkboxreducer from "./Slice";
export const store = configureStore({
    reducer:{
        checkbox:checkboxreducer,
        
    }
})