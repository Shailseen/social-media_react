import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/authSlice"
import postReducer from "../feature/postSlice"
import usersReducer from "../feature/usersSlice"
const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
        users: usersReducer,
    }
})

export default store;