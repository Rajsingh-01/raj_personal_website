import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./component/Login_page";
import HomePage from "./Dashboard/Home_page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home/*" element={<HomePage />} /> {/* Change to /home/* for nested routes */}
      </Routes>
    </Router>
  );
}

export default App;
