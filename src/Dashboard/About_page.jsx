import React, { useEffect } from "react";
import "./About_page.scss";
import { DesignServices, Code, BrandingWatermark } from '@mui/icons-material'; // Material UI Icons

const AboutPage = () => {
  useEffect(() => {
    console.log("About Page Rendered");
  }, []);

  return (
    <div className="about-section">
      <h2 class="multicolor-text">
  <span>What</span>
  <span>I</span>
  <span>Do</span>
</h2>

      <p>
        I am an engineer, having recently completed my degree in 2024. I love technology and innovation.
        I thrive on taking on new challenges every day. Constant learning and improving my skills are
        important to me. My ultimate goal is to find innovative solutions in my field and use my work
        to make a positive impact on the world.
      </p>
      
      {/* Services Cards */}
      <div className="services-container">
        <div className="service-card">
          <h3 className="service-title">
          <DesignServices style={{ marginRight: '8px'}} />react-design

          </h3>
          <p className="service-description">
            We create beautiful, intuitive UI/UX designs for websites and mobile apps.
          </p>
        </div>
        
        <div className="service-card">
          <h3 className="service-title">
            <Code style={{ marginRight: '8px' }} /> Front-end Developer
          </h3>
          <p className="service-description">
            We build responsive and interactive front-end solutions using modern web technologies.
          </p>
        </div>
        
        <div className="service-card">
          <h3 className="service-title">
            <BrandingWatermark style={{ marginRight: '8px' }} /> Design Services
          </h3>
          <p className="service-description">
            Our design services cover branding, graphic design, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
