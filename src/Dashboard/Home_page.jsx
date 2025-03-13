import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./Home_page.scss";

// Home component
const Home = () => {
  useEffect(() => {
    console.log("Home Page Rendered");
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page. Lorem ipsum dolor sit amet...</p>
    </div>
  );
};

// About component
const About = () => {
  useEffect(() => {
    console.log("About Page Rendered");
  }, []);

  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About Page. Lorem ipsum dolor sit amet...</p>
    </div>
  );
};

// Contact component
const Contact = () => {
  useEffect(() => {
    console.log("Contact Page Rendered");
  }, []);

  return (
    <div>
      <h2>Contact Page</h2>
      <p>This is the Contact Page. Lorem ipsum dolor sit amet...</p>
    </div>
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const userEmail = localStorage.getItem("userEmail") || "User";

  // Check if the user is logged in
  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      console.log("User is not logged in, redirecting to login page...");
      navigate("/"); // Redirect to login if not logged in
    }
  }, [navigate]);

  // Handle user logout
  const handleLogout = () => {
    setIsLoading(true);
    console.log("Logging out...");
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
          {/* Navigation links */}
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/home/about">About</Link></li>
          <li><Link to="/home/contact">Contact</Link></li>

          {/* Logout Button */}
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

      {/* Main Content Section with Routes */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
