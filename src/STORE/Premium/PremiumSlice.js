import { createSlice } from "@reduxjs/toolkit";

const initialPremiumState = {
  total: 0,
  pro: false,
  darkMode: false,
};

const premiumSlice = createSlice({
  name: "Premium",
  initialState: initialPremiumState,
  reducers: {
    addTotal(state, actions) {
      state.total = +actions.payload;
    },
    setPro(state) {
      state.pro = true;
    },
    setTheme(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { addTotal, setPro, setTheme } = premiumSlice.actions;
export default premiumSlice.reducer;
