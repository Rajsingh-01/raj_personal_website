import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AboutPage from "./About_page";
import ContactPage from "./Contact_page";
import { Button } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work"; // MUI icon
import "./Home_page.scss";

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
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
          {/* <Route path="about" element={<AboutPage />} /> */}
            <Route path="contact" element={<ContactPage />} />
          </Routes>

          <div className="profile-section">
            <div className="profile-info">
              <h2>Raj Singh</h2>
              <div className="bio-text">
                <p>
                  "I am an engineer, having recently completed my degree in 2024. I have a strong passion for technology and innovation, and I thrive on taking on new challenges every day. Constant learning and improving my skills are important to me. My ultimate goal is to find innovative solutions in my field and use my work to make a positive impact on the world."
                </p>
              </div>
              <div className="buttons-container">
                <Button variant="contained" color="primary" className="hire-me-btn">
                  Hire Me <WorkIcon style={{ marginLeft: "8px" }} />
                </Button>
                <Button variant="contained" className="contact-btn">
                  Contact
                </Button>
              </div>
            </div>

            <div className="profile-card">
              {image ? (
                <img src={image} alt="Uploaded" className="uploaded-image" />
              ) : (
                <div className="image-placeholder">Upload Image</div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="image-upload-input"
              />
            </div>
          </div>

          {/* About Page (Below Profile Section) */}
          <div className="about-section">
            <AboutPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
