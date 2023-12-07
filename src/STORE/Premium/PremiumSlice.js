import { createSlice } from "react-redux";

const initialPremiumState = { total: 0, end: 10000 };

const premiumSlice = createSlice({
  name: "Premium",
  initialState: initialPremiumState,
  reducers: {},
});
export default premiumSlice.reducers;
