import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaFileAlt, FaProjectDiagram } from "react-icons/fa";
import "./Styles/BusinessCard.css";
import Header from "./Header";
import Footer from "./Footer";

function BusinessCard() {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate("/projects");
  };

  return (
    <div className='app'>
      <Header />
      <Container fluid className="page-container">
        <Row className="justify-content-center card-container">
          <Col xs={12} md={6}>
            <Card className="card" style={{ marginTop: '5%' }}>
              <Card.Body>
                <Card.Title className="card-title">Dylan McMullen</Card.Title>
                <Card.Subtitle className="mb-2 card-subtitle">Software Engineer</Card.Subtitle>
                <Card.Text className="card-text">
                  Welcome to my portfolio! <br /> Click the buttons below to view my Resume, Projects, GitHub, and LinkedIn.
                </Card.Text>
                <div className="d-flex flex-wrap justify-content-around card-button-container">
                  <Button className="button mb-2" onClick={() => navigate("/resume")}>
                    <FaFileAlt /> Resume
                  </Button>
                  <Button className="button mb-2" onClick={goToProjects}>
                    <FaProjectDiagram /> Projects
                  </Button>
                  <a href="https://github.com/DylanM05" target="_blank" rel="noopener noreferrer">
                    <Button className="button mb-2">
                      <FaGithub /> GitHub
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/dylan-mcmullen-063504272/" target="_blank" rel="noopener noreferrer">
                    <Button className="button mb-2">
                      <FaLinkedin /> LinkedIn
                    </Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center skills-container">
          <Col xs={12} md={8}>
            <Card className="Skills">
              <Card.Body>
                <Card.Title className="card-title">Skills</Card.Title>
                <Card.Text className="card-text">
                  <div className="Skills-list">
                    <Row>
                      <Col xs={12} sm={6} md={4} className="mb-4">
                        <Card.Subtitle className="tag-category">Back End</Card.Subtitle>
                        <ul>
                          <li className="tag">Node.js</li>
                          <li className="tag">Express</li>
                          <li className="tag">SQL</li>
                          <li className="tag">MongoDB</li>
                          <li className="tag">GraphQL</li>
                        </ul>
                      </Col>
                      <Col xs={12} sm={6} md={4} className="mb-4">
                        <Card.Subtitle className="tag-category">Front End</Card.Subtitle>
                        <ul>
                          <li className="tag">React</li>
                          <li className="tag">HTML</li>
                          <li className="tag">CSS</li>
                          <li className="tag">Bootstrap</li>
                          <li className="tag">Microfrontends</li>
                        </ul>
                      </Col>
                      <Col xs={12} sm={6} md={4} className="mb-4">
                        <Card.Subtitle className="tag-category">AI</Card.Subtitle>
                        <ul>
                          <li className="tag">Python</li>
                          <li className="tag">JavaScript</li>
                          <li className="tag">OpenAI API Integration</li>
                          <li className="tag">Google Gemini API Integration</li>
                          <li className="tag">LangChain</li>
                        </ul>
                      </Col>
                      <Col xs={12} sm={6} md={4} className="mb-4">
                        <Card.Subtitle className="tag-category">Programming Languages</Card.Subtitle>
                        <ul>
                          <li className="tag">Java</li>
                          <li className="tag">Python</li>
                          <li className="tag">C#</li>
                          <li className="tag">JavaScript</li>
                        </ul>
                      </Col>
                      <Col xs={12} sm={6} md={4} className="mb-4">
                        <Card.Subtitle className="tag-category">Deployment</Card.Subtitle>
                        <ul>
                          <li className="tag">Docker</li>
                          <li className="tag">Docker Compose</li>
                          <li className="tag">NGINX Proxy</li>
                          <li className="tag">Cloudflare Tunnels</li>
                        </ul>
                      </Col>
                      <Col xs={12} sm={6} md={4} className="mb-4">
                        <Card.Subtitle className="tag-category">Version Control</Card.Subtitle>
                        <ul>
                          <li className="tag">Git</li>
                          <li className="tag">GitHub</li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default BusinessCard;
