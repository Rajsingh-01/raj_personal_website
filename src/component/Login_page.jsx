import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login_page.scss";

// Validation Functions (Moved Outside Component for Performance)
const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
const validatePassword = (password) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: validateEmail(value) ? "" : "Please enter a valid email address.",
      }));
    }

    if (name === "password") {
      setErrors((prev) => ({
        ...prev,
        password: validatePassword(value)
          ? ""
          : "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      }));
    }
  };

  //  Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email) || !validatePassword(formData.password)) return;

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", formData.email); // Store email for dashboard
    navigate("/home"); //Redirect to home page
  };

  return (
    <div className="login-page-container">
      <div className="left-section">
        <h1 className="welcome-heading">Hello! 👋</h1>
        <p className="welcome-subtext">Welcome to my portfolio</p>
      </div>
      <div className="right-section">
        <div className="login-box">
          <h2>Get Started with your account</h2>
          <form onSubmit={handleSubmit}>
            <div className="textbox">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            <div className="textbox password-box">
              <div className="password-input-container">
                <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              {errors.password && <div className="error-message">{errors.password}</div>}
            </div>
            <button type="submit" className="btn-login">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
