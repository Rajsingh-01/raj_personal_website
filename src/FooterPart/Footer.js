import React from "react";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>We provide amazing solutions for your business and help you grow.</p>
        </div>

        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="footer-socials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook style={{ fontSize: 30, marginRight: 8 }} />
              Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter style={{ fontSize: 30, marginRight: 8 }} />
              Twitter
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram style={{ fontSize: 30, marginRight: 8 }} />
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
