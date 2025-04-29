import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import AboutPage from "./About_page";
import ContactPage from "./Contact_page";
import Footer from "../FooterPart/Footer";
import { Button, IconButton, Drawer, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import MenuIcon from "@mui/icons-material/Menu";
import "./Home_page.scss";

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openResumeDialog, setOpenResumeDialog] = useState(false); // for dialog state
  const userEmail = localStorage.getItem("userEmail") || "User";

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      console.log("User is not logged in, redirecting to login page...");
      navigate("/");
    }
  }, [navigate]);

  const scrollToSection = (ref, path) => {
    if (ref && ref.current) {
      window.history.pushState({}, "", path);
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Raj-Singh-Resume.pdf"; 
    link.download = "Raj-Singh-Resume.pdf";
    link.click();
    setOpenResumeDialog(false);
  };

  return (
    <>
      <div className="dashboard">
        {/* Header */}
        <nav className="Header-part">
          <ul className="desktop-nav">
            <li>
              <Link to="#" onClick={(e) => { e.preventDefault(); scrollToSection(homeRef, "/home"); }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="#" onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef, "/home/about"); }}>
                About
              </Link>
            </li>
            <li>
              <Link to="#" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef, "/home/contact"); }}>
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

          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} className="hamburger-icon">
            <MenuIcon className="hamburger-menu-icon" />
          </IconButton>
        </nav>

        <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
          <div className="drawer-menu">
            <ul>
              <li>
                <Link to="#" onClick={(e) => { e.preventDefault(); scrollToSection(homeRef, "/home"); toggleDrawer(); }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef, "/home/about"); toggleDrawer(); }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="#" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef, "/home/contact"); toggleDrawer(); }}>
                  Contact
                </Link>
              </li>
              <li>
                <button className="logout-loading-btn" onClick={handleLogout}>
                  {isLoading ? <div className="spinner"></div> : "Logout"}
                </button>
              </li>
            </ul>
          </div>
        </Drawer>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<h3>You are already on Home Page Dashboard</h3>} />
          </Routes>

          {/* Home Section */}
          <div ref={homeRef} className="profile-section">
            <div className="profile-info">
              <h2>Raj Singh</h2>
              <div className="bio-text">
                <p>I am an engineer, having recently completed my degree in 2024. I have a strong passion for technology and innovation...</p>
              </div>
              <div className="buttons-container">
                <Button variant="contained" color="primary" className="hire-me-btn">
                  Hire Me <WorkIcon style={{ marginLeft: "8px" }} />
                </Button>
                <Button
                  variant="contained"
                  className="contact-btn"
                  onClick={() => setOpenResumeDialog(true)}
                >
                  Resume
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
                style={{ width: '56%', fontFamily: "sans-serif" }}
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

          {/* Footer Section */}
          <div ref={footerRef} className="footer-section">
            <Footer />
          </div>
        </div>
      </div>

      {/* Resume Download Confirmation Dialog */}
      <Dialog
        open={openResumeDialog}
        onClose={() => setOpenResumeDialog(false)}
      >
        <DialogTitle>Download Resume</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to download Raj Singh Resume?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenResumeDialog(false)}
            color="secondary"
            sx={{
              color: "white",
              backgroundColor: "#f50057",
              "&:hover": {
                backgroundColor: "#c51162",
                color: "white",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDownloadResume}
            color="primary"
            sx={{
              color: "white",
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#115293",
                color: "white",
              },
            }}
          >
            Download
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HomePage;
