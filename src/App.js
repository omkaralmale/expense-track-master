import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LogInPage from "./auth/LogInPage";
import SignUpPage from "./auth/SignUpPage";
import HeaderBar from "./components/layout/HeaderBar";
import Home from "./components/layout/Home/Home";
import UpdateProfile from "./components/layout/Home/UpdateProfile";
import ForgotPassword from "./auth/ForgotPassword";
import { useSelector } from "react-redux";
import Expenses from "./components/expense/Expenses";

const App = () => {
  const isLogIn = useSelector((state) => state.auth.isLogIn);
  return (
    <Router>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {isLogIn && <Route path="/home" element={<Home />} />}
        {isLogIn && <Route path="/expenses" element={<Expenses />} />}
        {isLogIn && (
          <Route path="/update-profile" element={<UpdateProfile />} />
        )}
        {!isLogIn && (
          <Route path="/forgot-password" element={<ForgotPassword />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
