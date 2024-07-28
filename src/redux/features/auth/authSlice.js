import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: {},
    isLoading: false,
    isError: false,
    error: "",
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    loginError: (state, action) => {
      state.isAuthenticated = false;
      state.error = action.payload;
      state.isLoading = false;
      state.isError = true;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    login: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    reset: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.isError = false;
      state.error = "";
    },
  },
});

export const { loginSuccess, loginError, logout, login, reset } =
  authSlice.actions;
export default authSlice.reducer;
