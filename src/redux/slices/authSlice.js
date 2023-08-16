import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios.js";

export const fetchAuth = createAsyncThunk(
  "auth/fetchUserData",
  async (params) => {
    const { data } = await axios.post("/auth/login", params, {
      withCredentials: true,
    });
    return data;
  }
);

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await axios.get("/auth/me", { withCredentials: true });
  return data;
});

export const fetchAuthRegister = createAsyncThunk(
  "auth/fetchAuthRegister",
  async (values) => {
    const { data } = await axios.post("/auth/register", values, {
      withCredentials: true,
    });
    return data;
  }
);

const initialState = {
  data: null,
  status: "loading",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchAuth.rejected]: (state) => {
      state.data = null;
      state.status = "error";
    },
    [fetchAuthMe.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchAuthMe.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchAuthMe.rejected]: (state) => {
      state.data = null;
      state.status = "error";
    },
    [fetchAuthRegister.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchAuthRegister.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchAuthRegister.rejected]: (state) => {
      state.data = null;
      state.status = "error";
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
