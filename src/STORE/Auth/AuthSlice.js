import { createSlice } from "@reduxjs/toolkit";

const initialAuth = {
  token: "",
  isLogIn: false,
  login: (token) => {},
  logout: () => {},
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    login(state, actions) {
      console.log(actions);
      state.token = actions.payload;
      state.isLogIn = true;
      localStorage.setItem("token", actions.payload);
      localStorage.setItem("isLogInLocal", "1");
    },
    logout(state, actions) {
      state.token = "";
      state.isLogIn = false;
      localStorage.removeItem("token");
      localStorage.setItem("isLogInLocal", "0");
    },
  },
});

export const { login, logout, isLogIn } = authSlice.actions;
export default authSlice.reducer;
