import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LogInPage from "./auth/LogInPage";
import SignUpPage from "./auth/SignUpPage";
import HeaderBar from "./components/layout/HeaderBar";
import Home from "./components/layout/Home/Home";
import UpdateProfile from "./components/layout/Home/UpdateProfile";
import ForgotPassword from "./auth/ForgotPassword";

const App = () => {
  return (
    <Router>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
