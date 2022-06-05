import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/authSlice"
import postReducer from "../feature/postSlice"
const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer
    }
})

export default store;