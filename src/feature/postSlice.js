import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  posts: [],
  status: STATUSES.IDLE,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.posts = action.payload;
      })
      .addCase(getPost.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = STATUSES.IDLE;
      });
  },
});
const encodedToken = localStorage.getItem("userToken");

export const getPost = createAsyncThunk(
  "post/get",
  async (noData, thunkAPI) => {
    try {
      const res = await axios.get("/api/posts");
      return res.data.posts.reverse();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addPost = createAsyncThunk(
  "post/add",
  async (postContent, thunkAPI) => {
    try {
      const res = await axios.post(
        "/api/posts",
        {
          postData: postContent,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      return res.data.posts.reverse();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export default postSlice.reducer;
