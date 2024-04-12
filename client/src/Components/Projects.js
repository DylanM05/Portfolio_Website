import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Modal, Button } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import Ethgas from '../Images/ethgas.png';
import Maticgas from '../Images/maticgas.png';
import androidapp1 from '../Images/androidapp1.png';
import androidapp2 from '../Images/androidapp2.png';
import portfolioapp1 from '../Images/portfolioapp1.png';
import portfolioapp2 from '../Images/portfolioapp2.png';
import ezdeals1 from '../Images/ezdeals1.png';
import ezdeals2 from '../Images/ezdeals2.png';
import './Styles/Projects.css';
import Header from './Header';

function Projects() {
  const navigate = useNavigate();
  const goToDiscWidget = () => {
    navigate('/discbot');
  };

  const [show, setShow] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setModalImage(image);
    setShow(true);
  };


  return (
      <div className='card-container'>
        <Header />
      <h1 className='Title' style={{textAlign: 'center', fontSize: '2.5em', color: '#333'}}>My Projects</h1>
      <div className='projects-grid'>
      <Card className="project">
        <Card.Body>
          <Card.Title className="card-title">ETH / MATIC gas Discord Bot</Card.Title>
          <Card.Subtitle className="card-subtitle">Language: Python</Card.Subtitle>
          <Card.Text className="card-text">This was during the Crypto craze of 2022.
             I made a discord bot that retrieves the gas price of ETH and MATIC using Etherscan or polygonscan</Card.Text>
             <div className='Card-images'>
             <Card.Img className='Card-Img' src={Maticgas} alt="Project" onClick={() => handleShow(Maticgas)} />
              <Card.Img className='Card-Img' src={Ethgas} alt="Project" onClick={() => handleShow(Ethgas)} />
             </div>
             <div className='button-container'>
             <a href="https://github.com/DylanM05/Gas-bot" target="_blank" rel="noopener noreferrer">
             <button className='card-button' variant="outline-dark"><FaGithub /> GitHub</button>
             </a>

             <button className='card-button' variant="outline-dark" onClick={goToDiscWidget}>Try it out!</button>
              </div>
        </Card.Body>
      </Card>

      <Card className="project">
        <Card.Body>
          <Card.Title className="card-title">Student - Teacher Management App</Card.Title>
          <Card.Subtitle className="card-subtitle">Language: Kotlin & XML</Card.Subtitle>
          <Card.Text className="card-text">This is a simple Android app that allows a teacher to register, add and manage students, tests, scores that are stored in the local Database</Card.Text>
          <div className='Card-images'>
          <Card.Img className='Card-Img' src={androidapp1} alt="Project" onClick={() => handleShow(androidapp1)} />
          <Card.Img className='Card-Img' src={androidapp2} alt="Project" onClick={() => handleShow(androidapp2)} />
             </div>
             <div className='button-container'>
          <a href="https://github.com/DylanM05/Android-Student-Teacher-Management-App" target="_blank" rel="noopener noreferrer">
          <button className='card-button' variant="outline-dark"><FaGithub /> GitHub</button>
          </a>
          </div>
        </Card.Body>
      </Card>
  
      <Card className="project">
        <Card.Body>
          <Card.Title className="card-title">Portfolio Website</Card.Title>
          <Card.Subtitle className="card-subtitle">Language: React.js, Node.js/Express.js, Bootstrap</Card.Subtitle>
          <Card.Text className="card-text">This is a portfolio website that I made using React.js & Bootstrap for the front end, and Node.js/express.js for the backend. I stored info in MongoDB and retrieve it for the resume page.</Card.Text>
             <div className='Card-images'>
             <Card.Img className='Card-Img' src={portfolioapp1} alt="Project" onClick={() => handleShow(portfolioapp1)} />
              <Card.Img className='Card-Img' src={portfolioapp2} alt="Project" onClick={() => handleShow(portfolioapp2)} />
             </div>
             <div className='button-container'>
             <a href="https://github.com/DylanM05/Portfolio_Website" target="_blank" rel="noopener noreferrer">
             <button className='card-button' variant="outline-dark"><FaGithub /> GitHub</button>
             </a>
              </div>
        </Card.Body>
      </Card>

      <Card className="project">
        <Card.Body>
          <Card.Title className="card-title">EZDealsHub web store</Card.Title>
          <Card.Subtitle className="card-subtitle">Language: Node.js, Node.js/Express.js, Bootstrap</Card.Subtitle>
          <Card.Text className="card-text">This is a web store that I made for my web app development class, in collaboration with 3 other people using Node.js & Bootstrap for the front end, and Node.js/express.js for the backend. If you check out the website, please keep in mind Render deletes our images!</Card.Text>
             <div className='Card-images'>
             <Card.Img className='Card-Img' src={ezdeals1} alt="Project" onClick={() => handleShow(ezdeals1)} />
              <Card.Img className='Card-Img' src={ezdeals2} alt="Project" onClick={() => handleShow(ezdeals2)} />
             </div>
             <div className='button-container'>
             <a href="https://github.com/DylanM05/EzDealsHub" target="_blank" rel="noopener noreferrer">
             <button className='card-button' variant="outline-dark"><FaGithub /> GitHub</button>
             </a>
             <a href="https://ezdealshub.onrender.com/" target="_blank" rel="noopener noreferrer">
             <button className='card-button' variant="outline-dark">Check it out!</button>
             </a>
              </div>
        </Card.Body>
      </Card>
  
  </div>
  <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog" contentClassName="modal-content">
  <Modal.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: 0, position: 'relative' }}>
    <img src={modalImage} alt="Zoomed project" style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
    <Button className="close-button" id='close-button' onClick={handleClose}>Close</Button>
  </Modal.Body>
</Modal>
  </div>
    
  );
}

export default Projects;