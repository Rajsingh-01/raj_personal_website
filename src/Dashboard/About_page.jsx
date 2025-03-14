import React, { useEffect } from "react";
// import "./About_page.scss"; // Make sure to create this file for styling

const AboutPage = () => {
  useEffect(() => {
    console.log("About Page Rendered");
  }, []);

  return (
    <div className="about-container">
      <h2>About Page</h2>
      <p>This is the About Page. Lorem ipsum dolor sit amet.rrrrrrrrrrrrrrr..</p>
    </div>
  );
};

export default AboutPage;
