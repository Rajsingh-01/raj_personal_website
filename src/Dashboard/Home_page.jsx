import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import AboutPage from "./About_page";
import ContactPage from "./Contact_page";
import { Button } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import "./Home_page.scss";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const userEmail = localStorage.getItem("userEmail") || "User";

  // Refs for scrolling
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      console.log("User is not logged in, redirecting to login page...");
      navigate("/");
    }
  }, [navigate]);

  // 🚀 Fix: Force /home on page refresh
  useEffect(() => {
    if (location.pathname !== "/home") {
      navigate("/home", { replace: true }); // Replace ensures no extra history entry
    }
  }, []); // Only runs on first render (refresh)

  // Scroll to section based on the URL
  useEffect(() => {
    if (location.pathname === "/home") {
      scrollToSection(homeRef);
    } else if (location.pathname === "/home/about") {
      scrollToSection(aboutRef);
    } else if (location.pathname === "/home/contact") {
      scrollToSection(contactRef);
    }
  }, [location.pathname]);

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

  // Function to scroll to section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="dashboard">
        <nav className="Header-part">
          <ul>
            <li>
              <Link to="/home" onClick={(e) => { e.preventDefault(); navigate("/home"); }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/home/about" onClick={(e) => { e.preventDefault(); navigate("/home/about"); }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/home/contact" onClick={(e) => { e.preventDefault(); navigate("/home/contact"); }}>
                Contact
              </Link>
            </li>
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
            {/* Default Redirect to Home if user is at root */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<h3>You are already on Home Page Dashboard</h3>} />
          </Routes>

          {/* Home Section (Hire Me & Contact) */}
          <div ref={homeRef} className="profile-section">
            <div className="profile-info">
              <h2>Raj Singh</h2>
              <div className="bio-text">
                <p>
                  "I am an engineer, having recently completed my degree in 2024. I have a strong passion for technology and innovation..."
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
                style={{ width: '56%' }}
              />
            </div>
          </div>

          {/* About Section */}
          <div ref={aboutRef} className="about-section">
            <AboutPage />
          </div>

          {/* Contact Section */}
          <div ref={contactRef} className="contact-section">
            <ContactPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
