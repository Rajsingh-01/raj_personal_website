import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./About_page.scss";
import GitHubDetails from "./GitHubDetails";
import { GitHub, DesignServices, Code, BrandingWatermark, ChevronLeft, ChevronRight } from "@mui/icons-material";

const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const services = [
    {
      icon: <GitHub style={{ marginRight: "8px" }} />,
      title: "Git-Hub 01",
      description:
        "Here is my Git link where you can visit and view all my projects...",
      link: "https://github.com/Rajsingh-01?tab=repositories",
    },
    {
      icon: <Code style={{ marginRight: "8px" }} />,
      title: "PersonalPortfolio",
      description: "Here is my Personal portfolio link where you can visit and view... ",
      link: "https://github.com/Rajsingh-01/raj_personal_website"
    },
    {
      icon: <BrandingWatermark style={{ marginRight: "8px" }} />,
      title: "Text Generator",
      description: "Here is View of a text generator link where you can visit and view...",
      link:"https://github.com/Rajsingh-01/Text-Generator"
    },
    {
      icon: <DesignServices style={{ marginRight: "8px" }} />,
      title: "Mind Space",
      description: "Here is View of a Mindspace link where you can visit and view...",
      link:"https://github.com/Rajsingh-01/Mind-space"
    },
  ];

  const handleNext = () => {
    if (currentIndex < services.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    console.log("About Page Rendered");
  }, []);

  return (
    <div className="about-section">
      <h2 className="multicolor-text">
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

      <div className="services-container">
        <button onClick={handlePrev} disabled={currentIndex === 0} className="nav-button prev-button">
          <ChevronLeft />
        </button>

        <div className="service-cards-wrapper">
          {services.slice(currentIndex, currentIndex + 4).map((service, index) => (
            <div key={index} className="service-card">
              {(service.title === "Git-Hub 01" || service.title === "PersonalPortfolio" || service.title === "Text Generator" ||  service.title ==="Mind Space") ? (
                <>
                  <div className="service-icon">
                    {service.icon}
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <p className="service-description">
                    {service.description}...
                    <span
  className="read-more"
  onClick={() =>
    navigate("/home/about/github-details", { state: { selectedTitle: service.title } })
  }
>
  Read More
</span>

                  </p>
                </>
              ) : (
                <>
                  <div className="service-icon">
                    {service.icon}
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <p className="service-description">{service.description}</p>
                </>
              )}
            </div>
          ))}
        </div>

        <button onClick={handleNext} disabled={currentIndex >= services.length - 4} className="nav-button next-button">
          <ChevronRight />
        </button>
      </div>

      <Routes>
        <Route path="github-details" element={<GitHubDetails />} />
      </Routes>
    </div>
  );
};

export default AboutPage;
