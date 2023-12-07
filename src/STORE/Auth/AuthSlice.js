import { createSlice } from "@reduxjs/toolkit";

const isLogInLocal = localStorage.getItem("isLogInLocal");
const initialAuth = {
  token: localStorage.getItem("token") || "",
  isLogIn: isLogInLocal ? parseInt(isLogInLocal, 10) === 1 : false,
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    login(state, actions) {
      state.token = actions.payload;
      state.isLogIn = true;
      localStorage.setItem("token", actions.payload);
      localStorage.setItem("isLogInLocal", "1");
    },
    logout(state) {
      state.token = "";
      state.isLogIn = false;
      localStorage.removeItem("token");
      localStorage.setItem("isLogInLocal", "0");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
