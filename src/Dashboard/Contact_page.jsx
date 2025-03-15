import "./Contact_page.scss";
import React, { useState } from "react";
import { sendMessage } from "../Service/Api";

const ContactPage = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update the specific field
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      const response = await sendMessage(formData); // Call the sendMessage function from the service file
      console.log(response);
      alert("Message sent successfully!");
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        alert(`Error: ${error.response.data.error || "Something went wrong! Please try again later."}`);
      } else {
        console.error("Network error:", error.message);
        alert("Network error. Please check your connection.");
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />

        {/* Submit button with spinner */}
        <button type="submit" disabled={isLoading}>
          {isLoading ? <div className="spinner"></div> : "Send_Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
