import { configureStore } from "react-redux";
import premiumReducer from "./Premium/PremiumSlice";
import authReducer from "./Auth/AuthSlice";

const store = configureStore({
  reducer: {
    premium: premiumReducer,
    auth: authReducer,
  },
});
export default store;
