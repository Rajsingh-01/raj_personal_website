import React, { useEffect, useRef, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./GitHubDetails.scss";

const GitHubDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedTitle = location.state?.selectedTitle;

  //   usage of hooks at the top level
  const gitHubRef = useRef(null);
  const portfolioRef = useRef(null);
  const textGenRef = useRef(null);
  const mindSpaceRef = useRef(null);

 
  const refs = useMemo(() => ({
    "Git-Hub": gitHubRef,
    "PersonalPortfolio": portfolioRef,
    "Text Generator": textGenRef,
    "Mind Space": mindSpaceRef,
  }), []);

  useEffect(() => {
    if (selectedTitle && refs[selectedTitle]?.current) {
      refs[selectedTitle].current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedTitle, refs]); 

  return (
    <div className="about-details">
      <div className="github-details">
        <h2
          ref={gitHubRef}
          className={selectedTitle === "Git-Hub" ? "highlight-title" : ""}
        >
          Git-Hub
        </h2>
        <p>
            Here is my Git link where you can visit and view all my projects. Feel free to explore the code, contributions, and the work I have done.
            Let me know if you have any questions or feedback through my contact page!
        </p>
        <a
          href="https://github.com/Rajsingh-01?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My GitHub
        </a>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>

      <div className="personal-portfolio-details">
        <h2
          ref={portfolioRef}
          className={selectedTitle === "PersonalPortfolio" ? "highlight-title" : ""}
        >
          My-Portfolio
        </h2>
        <p>
        We build responsive and interactive front-end solutions using modern web technologies.
         I have created my own personal portfolio, which includes a login page, home, about, and contact pages. 
         The portfolio showcases my skills, projects, and achievements. If you visit my contact page and send me a message from your email, it will come directly to my email, allowing for seamless communication. I continuously update and improve my portfolio to reflect my growth as a web developer and to showcase the best of my work.
        </p>
        <a
          href="https://github.com/Rajsingh-01/raj_personal_website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My GitHub
        </a>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>

      <div className="text_generator">
        <h2
          ref={textGenRef}
          className={selectedTitle === "Text Generator" ? "highlight-title" : ""}
        >
          Text Generator
        </h2>
        <p>
        I have created a text generator tool where users can easily convert any text into uppercase or lowercase. 
        In addition to this, the tool offers several useful features such as copy, paste, clear text, and the ability
         to customize the text format as they wish. Users can also count words and characters, remove extra spaces,
          and perform other text-related tasks quickly and efficiently. It’s a simple and user-friendly tool designed to 
          make text editing more convenient and flexible.</p>       
        <a
          href="https://github.com/Rajsingh-01/Text-Generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My GitHub
        </a>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>

      <div className="mind_space">
        <h2
          ref={mindSpaceRef}
          className={selectedTitle === "Mind Space" ? "highlight-title" : ""}
        >
          MindSpace
        </h2>
        <p>
        We build responsive and interactive front-end solutions using modern web technologies. I have created my own personal portfolio, which includes a login page, home, about, and contact pages. The portfolio showcases my skills, projects, and achievements. If you visit my contact page and send me a message from your email, it will come directly to my email, allowing for seamless communication. I continuously update and improve my portfolio to reflect my growth as a web developer and to showcase the best of my work.
        </p>
        <a
          href="https://github.com/Rajsingh-01/Mind-space"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My GitHub
        </a>
        <a
          href="https://mindspace67.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View_Deployed_Site
        </a>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default GitHubDetails;
