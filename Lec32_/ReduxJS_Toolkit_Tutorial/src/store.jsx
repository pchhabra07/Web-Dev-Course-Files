import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/CounterSlice";
import colorReducer from "./slices/ColorSlice";

export default configureStore({
    reducer:{
        counter:counterReducer,
        color:colorReducer
    }
})