import React from "react";
import { useNavigate } from "react-router-dom";
import "./GitHubDetails.scss";
const GitHubDetails = () => {
  const navigate = useNavigate();

  return (
    <>
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
    {/* //added personal portfolio details  */}
    <div className="personal-portfolio-details">
    <h2>My-Portfolio</h2>
    <p>
    We build responsive and interactive front-end solutions using modern web technologies. I have created my own personal portfolio, which includes a login page, home, about, and contact pages. The portfolio showcases my skills, projects, and achievements. If you visit my contact page and send me a message from your email, it will come directly to my email, allowing for seamless communication. I continuously update and improve my portfolio to reflect my growth as a web developer and to showcase the best of my work.
    </p>
    <a href="https://github.com/Rajsingh-01/raj_personal_website" target="_blank" rel="noopener noreferrer">
      Visit My GitHub
    </a>
    <button onClick={() => navigate(-1)}>Back</button>
  </div>
  </>
  );
};

export default GitHubDetails;
