import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import Ethgas from '../Images/ethgas.png';
import Maticgas from '../Images/maticgas.png';
import './Styles/Projects.css';




function Projects() {

const navigate = useNavigate();
const goToDiscWidget = () => {
  navigate('/discbot');
};


  return (
    <div>
      <div className='card-container'>
      <h1 className='Title' style={{textAlign: 'center', fontSize: '2.5em', color: '#333'}}>My Projects</h1>
      <Card className="project">
        <Card.Body>
          <Card.Title className="card-title">ETH / MATIC gas Discord Bot</Card.Title>
          <Card.Subtitle className="card-subtitle">Language: Python</Card.Subtitle>
          <Card.Text className="card-text">This was during the Crypto craze of 2022.
             I made a discord bot that retrieves the gas price of ETH and MATIC using Etherscan or polygonscan</Card.Text>
             <div className='Card-images'>
             <Card.Img className='Card-Img' src={Ethgas} alt="Project" />
             <Card.Img className='Card-Img' src={Maticgas} alt="Project" />
             </div>
             <div className="card-button">
             <div>
             <a href="https://github.com/DylanM05/Gas-bot" target="_blank" rel="noopener noreferrer">
      <button variant="outline-dark">
        <FaGithub /> GitHub
      </button>
     </a>
              </div>
              <button variant="outline-dark" onClick={goToDiscWidget}>
        Try it out!
      </button>
      </div>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}

export default Projects;