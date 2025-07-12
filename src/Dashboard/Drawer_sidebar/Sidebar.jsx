import React from "react";
import { Drawer, IconButton } from "@mui/material";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LogoutIcon from "@mui/icons-material/Logout";


import RajImage from "../../assests/Raj.jpg"
function Sidebar({
  openDrawer,
  toggleDrawer,
  homeRef,
  aboutRef,
  contactRef,
  scrollToSection,
  handleLogout,
  isLoading,
  userEmail,
}) {
  return (
 <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
  <div className="drawer-menu">
    <div className="drawer-header">
      <button className="close-icon" onClick={toggleDrawer}>
        <CloseIcon />
      </button>
    </div>

    {/* ✅ New wrapper for profile + menu */}
    <div className="menu-section">
      <div className="user-image-container">
        <img src={RajImage} alt="Raj" className="user-image" />
        {userEmail && <p className="user-email">{userEmail}</p>}
      </div>

      <ul>
        <li>
          <Link to="#" onClick={(e) => { e.preventDefault(); scrollToSection(homeRef, "/home"); toggleDrawer(); }}>
            <div className="icon-label">
              <HomeIcon />
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="#" onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef, "/home/about"); toggleDrawer(); }}>
            <div className="icon-label">
              <InfoIcon />
              <span>About</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="#" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef, "/home/contact"); toggleDrawer(); }}>
            <div className="icon-label">
              <ContactMailIcon />
              <span>Contact</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>

    {/* Logout stays at bottom */}
    <div className="logout-section">
      <button className="logout-loading-btn" onClick={handleLogout}>
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <div className="icon-label">
            <LogoutIcon />
            <span>Logout</span>
          </div>
        )}
      </button>
    </div>
  </div>
</Drawer>


  );
}

export default Sidebar;
