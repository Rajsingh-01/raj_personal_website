import React, { useEffect } from "react";
// import "./Contact_page.scss"; // Make sure to create this file for styling

const ContactPage = () => {
  useEffect(() => {
    console.log("Contact Page Rendered");
  }, []);

  return (
    <div className="contact-container">
      <h2>Contact Page</h2>
      <p>This is the Contact Page. Lorem ipsum dolor sit amet...</p>
    </div>
  );
};

export default ContactPage;
