import { createSlice } from "@reduxjs/toolkit";
import { changePassword, fetchProfile, userLogin } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    user: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isLoading = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.isLoading = true;
      state.token = null;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.error = null;
    },
    [userLogin.rejected]: (state) => {
      state.isLoading = false;
      state.token = null;
      state.user = null;
    },
    [fetchProfile.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchProfile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.error = null;
    },
    [fetchProfile.rejected]: (state) => {
      state.isLoading = false;
      state.user = null;
    },
    [changePassword.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [changePassword.fulfilled]: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    [changePassword.rejected]: (state) => {
      state.error = null;
    },
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
