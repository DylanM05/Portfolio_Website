import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaFileAlt, FaProjectDiagram } from "react-icons/fa";
import './Styles/BusinessCard.css';
import Header from "./Header";
import Footer from "./Footer";

function BusinessCard() {
  const navigate = useNavigate();
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const goToProjects = () => {
    navigate('/projects');
  };

  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }
  
  function getMonthName(monthIndex) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[monthIndex];
  }
  
  const now = new Date();
  const day = now.getDate();
  const monthIndex = now.getMonth();
  const year = now.getFullYear();

  const formattedDate = `${getMonthName(monthIndex)} ${day}${getOrdinalSuffix(day)} ${year}`;

  return (
    <div>
            <Header />
            <div className="page-container">
            <div className="card-container">
      <Card className="card">
        <Card.Body>
          <div>
            <Card.Title className="card-title">Dylan McMullen</Card.Title>
            <Card.Subtitle className="card-subtitle">Software Engineer</Card.Subtitle>
            <Card.Text className="card-text">
              Welcome to my portfolio! <br /> Click the button below to view my Resume, Projects, GitHub, and LinkedIn.
            </Card.Text>
          </div>
          <div class="card-button-container">
          <button className="card-button" onClick={() => navigate('/resume')}>
    <FaFileAlt /> Resume
  </button>
  <button className="card-button" onClick={goToProjects}>
    <FaProjectDiagram /> Projects
  </button>
  <a href="https://github.com/DylanM05" target="_blank" rel="noopener noreferrer">
    <button className="card-button" variant="outline-dark">
      <FaGithub /> GitHub
    </button>
  </a>

  <a href="https://www.linkedin.com/in/dylan-mcmullen-063504272/" target="_blank" rel="noopener noreferrer">
    <button className="card-button" variant="outline-dark">
      <FaLinkedin /> LinkedIn
    </button>
  </a>
  </div>
        </Card.Body>
      </Card>
      </div>
      <div className="skills-container">
      <Card className="Skills">
        <Card.Body>
          <Card.Title className="card-title">Skills</Card.Title>
          <Card.Text className="card-text">
            <ul className="Skills-list">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Java</li>
              <li>Python</li>
              <li>Kotlin (Android)</li>
              <li>C#</li>
              <li>SQL</li>
              <li>noSQL</li>
            </ul>
          </Card.Text>
        </Card.Body>

      </Card>
      </div>
      <div className="time-container">
      <Card className="Time">
      <Card.Subtitle className="card-text">
   {formattedDate} 
            </Card.Subtitle>
      </Card>
    </div>
    </div>
    <Footer />
        </div>
  );
}

export default BusinessCard;