import { createSlice } from "@reduxjs/toolkit";

const initialProfileState = { email: "" };

const UpdateSlice = createSlice({
  name: "Premium",
  initialState: initialProfileState,
  reducers: {
    updateEmail(state, actions) {
      state.email = actions.payload;
    },
  },
});

export const { updateEmail } = UpdateSlice.actions;
export default UpdateSlice.reducers;
