import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  status: STATUSES.IDLE,
  postsByUsername: [],
  profileUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostByUsername.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getPostByUsername.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.postsByUsername = action.payload;
      })
      .addCase(getUsersByUserId.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getUsersByUserId.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.profileUser = action.payload;
      });
  },
});

export const getUsersByUserId = createAsyncThunk(
    "users/details",
    async(userId,thunkAPI) => {
        try {
            const res = await axios.get(`/api/users/${userId}`)
            return res.data.user;
        } catch (error) {
            return thunkAPI.rejectWithValue;
        }
    }
)

export const getPostByUsername = createAsyncThunk(
  "users/posts",
  async (username, thunkAPI) => {
    try {
      const res = await axios.get(`/api/posts/user/${username}`);
      return res.data.posts.reverse();
    } catch (error) {
      return thunkAPI.rejectWithValue;
    }
  }
);

export default usersSlice.reducer;
