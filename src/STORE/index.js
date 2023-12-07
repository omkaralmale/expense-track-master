import { configureStore } from "@reduxjs/toolkit";
import premiumReducer from "./Premium/PremiumSlice";
import authReducer from "./Auth/AuthSlice";
import UpdateSlice from "./updateProfile/UpdateProfile";

const store = configureStore({
  reducer: {
    premium: premiumReducer,
    auth: authReducer,
    updateEmail: UpdateSlice,
  },
});

export default store;
