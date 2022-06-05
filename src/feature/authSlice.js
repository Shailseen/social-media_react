import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
// import { toast } from "react-toastify";

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
      //   toast('Logged out successfully!')
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
        localStorage.setItem("my-user-data",JSON.stringify(action.payload.foundUser))
        // toast(`Welcome ${state.user.firstName + state.user.lastName}`);
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = STATUSES.ERROR;
        // toast(action.payload.message);
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
      });
  },
});

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

export default authSlice.reducer;
export const { logout } = authSlice.actions;
// export const useAuth = () => useSelector((state) => state.auth);
