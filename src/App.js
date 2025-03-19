import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./Dashboard/Home_page";
import LoginPage from "./component/Login_page";
import AboutPage from "./Dashboard/About_page";
import GitHubDetails from "./Dashboard/GitHubDetails";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/about" element={<AboutPage />} />
        <Route path="/home/about/github-details" element={<GitHubDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
