import React from "react";
import { useNavigate } from "react-router-dom";
import "./GitHubDetails.scss";
const GitHubDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="github-details">
      <h2>Git-Hub 01</h2>
      <p>
        Here is my Git link where you can visit and view all my projects. Feel free to explore the code, contributions, and the work I've done.
        Let me know if you have any questions or feedback through my contact page!
      </p>
      <a href="https://github.com/Rajsingh-01?tab=repositories" target="_blank" rel="noopener noreferrer">
        Visit My GitHub
      </a>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default GitHubDetails;
