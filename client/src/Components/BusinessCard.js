import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaFileAlt, FaProjectDiagram } from "react-icons/fa";
import './Styles/BusinessCard.css';
import Header from "./Header";
import Footer from "./Footer";

function BusinessCard() {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate('/projects');
  };

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
              <div className="card-button-container">
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
                  <button className="card-button">
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
      <div className="Skills-list">
        <div>
          <Card.Subtitle className="tag-category">Back End</Card.Subtitle>
          <li className="tag">Node.js</li>
          <li className="tag">Express</li>
          <li className="tag">SQL</li>
          <li className="tag">noSQL</li>
        </div>
        <div>
          <Card.Subtitle className="tag-category">Front End</Card.Subtitle>
          <li className="tag">JavaScript</li>
          <li className="tag">React</li>
          <li className="tag">HTML</li>
          <li className="tag">CSS</li>
          <li className="tag">Bootstrap</li>
        </div>
        <div>
          <Card.Subtitle className="tag-category">Version Control</Card.Subtitle>
          <li className="tag">Git</li>
          <li className="tag">GitHub</li>
        </div>
        <div>
          <Card.Subtitle className="tag-category">Programming Languages</Card.Subtitle>
          <li className="tag">Java</li>
          <li className="tag">Python</li>
          <li className="tag">C#</li>
        </div>
        <div>
          <Card.Subtitle className="tag-category">Mobile</Card.Subtitle>
          <li className="tag">Kotlin (Android)</li>
        </div>
      </div>
    </Card.Text>
  </Card.Body>
</Card>
        </div>
      </div>
      <div className="footer">
      <Footer />
      </div>
    </div>
  );
}

export default BusinessCard;
