import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/UserAuthentication/Login";
import Register from "./components/UserAuthentication/Register";
import ProfileManagement from "./components/UserAuthentication/ProfileManagement";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

const Home = () => (
  <div className="home-container">
    <h2>Welcome to the Online Safety Platform</h2>
    <div className="home-buttons">
      <Link to="/login" className="home-button">
        Login
      </Link>
      <Link to="/register" className="home-button">
        Register
      </Link>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProfileManagement />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
