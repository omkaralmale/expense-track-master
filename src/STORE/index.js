import { configureStore } from "@reduxjs/toolkit";
import premiumReducer from "./Premium/PremiumSlice";
import authReducer from "./Auth/AuthSlice";
import UpdateProfile from "./updateProfile/UpdateProfile";

const store = configureStore({
  reducer: {
    premium: premiumReducer,
    auth: authReducer,
    updateEmail: UpdateProfile,
  },
});
export default store;
