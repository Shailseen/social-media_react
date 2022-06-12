import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  user: null,
  status: STATUSES.IDLE,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.status = STATUSES.IDLE;
      state.user = null;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.user = action.payload.foundUser;
        localStorage.setItem("userToken", action.payload.encodedToken);
        localStorage.setItem(
          "my-user-data",
          JSON.stringify(action.payload.foundUser)
        );
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = STATUSES.ERROR;
      })

      .addCase(signupUser.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        // state.user = {
        //   token: action.payload.encodedToken,
        //   firstName: action.payload.createdUser.firstName,
        //   lastName: action.payload.createdUser.lastName,
        // };
        // localStorage.setItem("token", action.payload.encodedToken);
        // toast(`Welcome ${state.user.firstName + state.user.lastName}`);
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        // toast(action.payload.message);
      })
      .addCase(followUser.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.user = action.payload;
      });
  },
});

const encodedToken = localStorage.getItem("userToken")

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userCredentials, thunkAPI) => {
    try {
      const res = await axios.post("/api/auth/login", userCredentials);
      const {
        data: { foundUser, encodedToken },
      } = res;
      return { foundUser, encodedToken };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signup",
  async (data, thunkAPI) => {
    try {
      const { firstName, lastName, email, password } = data;
      const res = await axios.post("/api/auth/signup", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const followUser = createAsyncThunk(
  "post/follow",
  async (userId, thunkAPI) => {
    try {
      const res = await axios.post(
        `/api/users/follow/${userId}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return res.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue;
    }
  }
);


export default authSlice.reducer;
export const { logout } = authSlice.actions;

