import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./Home_page.scss";

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const userEmail = localStorage.getItem("userEmail") || "User"; // Get user email from storage

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/"); // Redirect to login if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userEmail");
      navigate("/"); // Redirect to login page after logout
    }, 2000);
  };

  return (
    <div className="dashboard">
      <nav className="Header-part">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/home/about">About</Link></li>
          <li><Link to="/home/contact">Contact</Link></li>

          {/* User Info and Logout Button Inside ul */}
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
          <Route path="home" element={<Home />} />
          <Route path="home/about" element={<About />} />
          <Route path="home/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
