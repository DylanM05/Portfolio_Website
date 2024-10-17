import React, { useState } from 'react';
import { Card, Modal, Button, Carousel } from 'react-bootstrap';
import { DiAndroid } from "react-icons/di";
import { SiPython, SiPreact, SiBootstrap, SiMongodb} from "react-icons/si";
import { FaNodeJs, FaGithub } from "react-icons/fa";
import { BiSolidFileCss } from "react-icons/bi";
import { TbFileTypeXml, TbBrandKotlin } from "react-icons/tb";

import './Styles/Projects.css';
import Header from './Header';
import Footer from './Footer';

import Ethgas from '../Images/ethgas.png';
import Maticgas from '../Images/maticgas.png';
import androidapp1 from '../Images/androidapp1.png';
import portfolioapp1 from '../Images/portfolioapp1.png';
import portfolioapp2 from '../Images/portfolioapp2.png';
import ezdeals1 from '../Images/ezdeals1.png';
import ezdeals2 from '../Images/ezdeals2.png';
import portainer from '../Images/portainer.png';
import webscrape from '../Images/webscrape.png';

function Projects() {
  const [show, setShow] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = (images, index) => {
    setModalImages(images);
    setCurrentImageIndex(index);
    setShow(true);
  };

  const projects = [
    {
      title: 'ETH / MATIC gas Discord Bot',
      subtitle: <div>Language: <SiPython /> Python </div>,
      description: 'This was made during the Crypto craze of 2022. I made this discord bot that retrieves the gas price of ETH and MATIC using Etherscan or polygonscan',
      imagedisc:'Click the images to view them in full size',
      images: [Maticgas, Ethgas],
      githubLink: 'https://github.com/DylanM05/Gas-bot',
      buttonText: 'GitHub',
    },
    {
      title: 'Student - Teacher Management App',
      subtitle: <div>Language: <DiAndroid /> <TbBrandKotlin/>Kotlin <TbFileTypeXml/>XML</div> ,
      description: 'This is a simple Android app that allows a teacher to register, add and manage students, tests, scores that are stored in the local Database',
      images: [androidapp1],
      githubLink: 'https://github.com/DylanM05/Android-Student-Teacher-Management-App',
      buttonText: 'GitHub'
    },
    {
      title: 'Portfolio Website',
      subtitle: <div>Language: <SiPreact />React.js <br/><FaNodeJs />Node.js/Express.js <br/><SiBootstrap />Bootstrap <SiMongodb />MongoDB <br/> <BiSolidFileCss/> CSS  </div>,
      description: 'This is a portfolio website that I made using React.js & Bootstrap for the front end, and Node.js/express.js for the backend. I stored info in MongoDB and retrieve it for the resume page.',
      images: [portfolioapp1, portfolioapp2],
      githubLink: 'https://github.com/DylanM05/Portfolio_Website',
      buttonText: 'GitHub'
    },
    {
      title: 'EZDealsHub web store',
      subtitle:<div>Language: <FaNodeJs /> Node.js/Express.js<br/> <SiBootstrap/>Bootstrap <SiMongodb/> MongoDB </div>,
      description: 'This is a web store that I made for my web app development class, in collaboration with 3 other people using Node.js & Bootstrap for the front end, and Node.js/express.js for the backend. If you check out the website, please keep in mind Render deletes our images!',
      images: [ezdeals1, ezdeals2],
      githubLink: 'https://github.com/DylanM05/EzDealsHub',
      buttonText: 'GitHub',
      websiteLink: 'https://ezdealshub.onrender.com/',
      websiteButtonText: 'Check it out!'
    },
    {
      title: 'Indeed Webscraper',
      subtitle: <div>Language: <SiPython /> Python </div>,
      description: 'This is a webscraper that I made using Python. It scrapes the Indeed website for job postings and stores them in a CSV file.',
      images: [webscrape],
      githubLink: 'https://github.com/DylanM05/IndeedWebScraper',
      buttonText: 'GitHub'
    },
    {
      title: 'Home Media & Cloud server',
      subtitle: <div>Running: Ubuntu Server and seperating everything into Docker containers</div>,
      description: 'This is a server that I made using Ubuntu Server. It runs a Plex server, Nextcloud server, and a few other services. I have everything separated into Docker containers for easy management.',
      images: [portainer],
    }
  ];

  return (
    <div className="App">
      <Header />
      <div className="content">
        <h1 className='Title'>My Projects</h1>
        <Carousel interval={null}>
          {projects.map((project, index) => (
            <Carousel.Item key={index} className="carousel-item">
              <Card className="project">
                <Card.Body>
                  <Card.Title className="card-title">{project.title}</Card.Title>
                  <Card.Subtitle className="card-subtitle">
                    {project.subtitle}
                  </Card.Subtitle>
                  <Card.Text className="card-text">{project.description}</Card.Text>
                  <div className='Card-images'>
                    {project.images.length === 1 ? (
                      <Card.Img className='Card-Img' src={project.images[0]} alt="Project" onClick={() => handleShow(project.images, 0)} />
                    ) : (
                      <div className="carousel-container">
                        <Carousel 
                          indicators={true} 
                          controls={false} 
                          interval={10000} // Set the interval for cycling through photos
                          className="image-carousel" 
                          indicatorLabels={['']} // This prop is used to show indicators
                        >
                          {project.images.map((image, i) => (
                            <Carousel.Item key={i} onClick={() => handleShow(project.images, i)}>
                              <img className="d-block w-100" src={image} alt={`Slide ${i}`} />
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      </div>
                    )}
                  </div>
                  <Card.Text className="img-disc">Click the images to view them in full size</Card.Text>
                  <div className='button-container'>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <button className='card-button' variant="outline-dark"><FaGithub /> GitHub</button>
                    </a>
                    {project.onClick && (
                      <button className='card-button' variant="outline-dark" onClick={project.onClick}>{project.buttonText}</button>
                    )}
                    {project.websiteLink && (
                      <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                        <button className='card-button' variant="outline-dark">{project.websiteButtonText}</button>
                      </a>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <Footer />
      <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog" contentClassName="modal-content">
        <Modal.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: 0, position: 'relative' }}>
          <img src={modalImages[currentImageIndex]} alt="Zoomed project" style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
          <Button className="close-button" id='close-button' onClick={handleClose}>Close</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Projects;