import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AboutPage from "./About_page";
import ContactPage from "./Contact_page";
import "./Home_page.scss";

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const userEmail = localStorage.getItem("userEmail") || "User";

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      console.log("User is not logged in, redirecting to login page...");
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    setIsLoading(true);
    console.log("Logging out...");
    setTimeout(() => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userEmail");
      navigate("/");
    }, 2000);
  };

  return (
    <div className="dashboard">
      <nav className="Header-part">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/home/about">About</Link></li>
          <li><Link to="/home/contact">Contact</Link></li>
          <li>
            <header>
              <button className="user-btn">{userEmail}</button>
              <button className="logout-loading-btn" onClick={handleLogout}>
                {isLoading ? <div className="spinner"></div> : "Logout"}
              </button>
            </header>
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <Routes>
          <Route path="" element={<h3>You are already on Home Page Dashboard</h3>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
