import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LogInPage from "./auth/LogInPage";
import SignUpPage from "./auth/SignUpPage";
import HeaderBar from "./components/layout/HeaderBar";
import Home from "./components/layout/Home/Home";
import UpdateProfile from "./components/layout/Home/UpdateProfile";
import ForgotPassword from "./auth/ForgotPassword";
import { AuthContext } from "./auth/Store/ContextAPI";
import Expenses from "./components/expense/Expenses";

const App = () => {
  const context = useContext(AuthContext);
  return (
    <Router>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {context.isLogIn && <Route path="/home" element={<Home />} />}
        {context.isLogIn && <Route path="/expenses" element={<Expenses />} />}
        {context.isLogIn && (
          <Route path="/update-profile" element={<UpdateProfile />} />
        )}
        {context.isLogIn && (
          <Route path="/forgot-password" element={<ForgotPassword />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
