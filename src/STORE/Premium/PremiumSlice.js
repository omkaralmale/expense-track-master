import { createSlice } from "@reduxjs/toolkit";

const initialPremiumState = { total: 0, end: 10000 };

const premiumSlice = createSlice({
  name: "Premium",
  initialState: initialPremiumState,
  reducers: {
    addTotal(state, actions) {
      state.total = +actions.payload;
    },
  },
});

export const { addTotal } = premiumSlice.actions;
export default premiumSlice.reducer;
