import React, { useState, useEffect } from 'react';
import { Card, Modal, Button, Carousel, Container } from 'react-bootstrap';
import { DiAndroid } from "react-icons/di";
import { SiPython, SiPreact, SiBootstrap, SiMongodb } from "react-icons/si";
import { FaNodeJs, FaGithub } from "react-icons/fa";
import { BiSolidFileCss } from "react-icons/bi";
import { TbFileTypeXml, TbBrandKotlin } from "react-icons/tb";

import Header from './Header';
import Footer from './Footer';


import './Styles/Projects.css'; // Ensure this import is present
import '../App.css'; // Ensure this import is present


import Ethgas from '../Images/ethgas.png';
import Maticgas from '../Images/maticgas.png';
import androidapp1 from '../Images/androidapp1.png';
import portfolioapp1 from '../Images/portfolioapp1.png';
import portfolioapp2 from '../Images/portfolioapp2.png';
import ezdeals1 from '../Images/ezdeals1.png';
import ezdeals2 from '../Images/ezdeals2.png';
import portainer from '../Images/portainer.png';
import webscrape from '../Images/webscrape.png';
import waterways1 from '../Images/waterways1.png';
import waterways2 from '../Images/waterways2.png';
import waterways3 from '../Images/waterways3.png';

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = (images, index) => {
    setModalImages(images);
    setCurrentImageIndex(index);
    setShow(true);
  };

  const projects = [
    {
      title: 'WaterWays App - Fishing Utility',
      subtitle:<div>Language: <FaNodeJs /> Node.js/Express.js<br/> <SiBootstrap/>Bootstrap <SiMongodb/> MongoDB </div>,
      description: 'WaterWays is a custom fishing analytics platform I developed that collects water and weather data via scheduled API calls every 6 hours. Built with Node.js and MongoDB, the application analyzes metrics like temperature, barometric pressure, and water levels to determine optimal fishing conditions. Self-hosted with continuous improvements.',
      images: [waterways1, waterways2, waterways3],
      githubLink: 'https://github.com/DylanM05/WaterWays',
      buttonText: 'GitHub',
      websiteLink: 'https://waterways.dylansserver.top/',
      websiteButtonText: 'Check it out!'
    },
    {
      title: 'EZDealsHub web store',
      subtitle:<div>Language: <FaNodeJs /> Node.js/Express.js<br/> <SiBootstrap/>Bootstrap <SiMongodb/> MongoDB </div>,
      description: 'EZDealsHub is an e-commerce platform I built with three teammates using the MERN stack. Features include user authentication, product browsing with filters, shopping cart, and order processing. I implemented responsive Bootstrap UI and RESTful APIs with Node.js/Express. Currently deployed on Render\'s free tier.',
      images: [ezdeals1, ezdeals2],
      githubLink: 'https://github.com/DylanM05/EzDealsHub',
      buttonText: 'GitHub',
      websiteLink: 'https://ezdealshub.onrender.com/',
      websiteButtonText: 'Check it out!'
    },
    {
      title: 'Home Media & Cloud server',
      subtitle: <div>Running: Ubuntu Server and running everything in Docker containers</div>,
      description: 'I built a self-hosted media and cloud infrastructure using Ubuntu Server with Docker containers for Plex media streaming and Nextcloud file storage. Implemented automated weekly backups using shell scripts and cron jobs, demonstrating practical DevOps skills and systems administration expertise.',
      images: [portainer],
    },
    {
      title: 'ETH / MATIC gas Discord Bot',
      subtitle: <div>Language: <SiPython /> Python </div>,
      description: 'Python Discord bot that fetches and displays real-time Ethereum and Polygon (MATIC) gas prices using Etherscan and Polygonscan APIs. Helps users track blockchain transaction costs efficiently.',
      imagedisc:'Click the images to view them in full size',
      images: [Maticgas, Ethgas],
      githubLink: 'https://github.com/DylanM05/Gas-bot',
      buttonText: 'GitHub',
    },
    {
      title: 'Portfolio Website',
      subtitle: <div>Language: <SiPreact />React.js <br/><FaNodeJs />Node.js/Express.js <br/><SiBootstrap />Bootstrap <SiMongodb />MongoDB <br/> <BiSolidFileCss/> CSS  </div>,
      description: 'Full-stack personal portfolio built with React.js and Bootstrap frontend, powered by a Node.js/Express backend. Features dynamic content management through MongoDB integration for resume data and responsive design for optimal viewing across devices.',
      images: [portfolioapp1, portfolioapp2],
      githubLink: 'https://github.com/DylanM05/Portfolio_Website',
      buttonText: 'GitHub'
    },
    {
      title: 'Indeed Webscraper',
      subtitle: <div>Language: <SiPython /> Python </div>,
      description: 'Python-based web scraping tool that automates job search by extracting Indeed.com postings based on customizable keywords. Implements data parsing techniques and outputs structured results to CSV format for analysis and application tracking.',
      images: [webscrape],
      githubLink: 'https://github.com/DylanM05/IndeedWebScraper',
      buttonText: 'GitHub'
    },
    {
      title: 'Course & Marks Android App',
      subtitle: <div>Language: <DiAndroid /> <TbBrandKotlin/>Kotlin <TbFileTypeXml/>XML</div> ,
      description: 'Kotlin-based Android application for educational management featuring secure user authentication, student record organization, and assessment tracking. Implemented using SQLite for local data persistence with a clean, intuitive XML-designed interface.',
      images: [androidapp1],
      githubLink: 'https://github.com/DylanM05/Android-Student-Teacher-Management-App',
      buttonText: 'GitHub'
    }
  ];

 
  return (
    <div className="app">
      <Header />
      <Container style={styles.contentContainer}>
        <div className="project-nav-container mb-4 py-2">
          {/* For desktop/tablet - the current button navigation */}
          <div className="project-nav d-none d-md-flex flex-wrap justify-content-center">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`project-nav-item p-2 m-1 ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                {project.title.split(' - ')[0]}
              </div>
            ))}
          </div>
          
          {/* For mobile - dropdown navigation */}
          <div className="d-md-none mx-auto text-center">
            <select 
              className="form-select project-dropdown"
              value={activeIndex}
              onChange={(e) => setActiveIndex(parseInt(e.target.value))}
              aria-label="Project selection"
            >
              {projects.map((project, index) => (
                <option key={index} value={index}>
                  {project.title.split(' - ')[0]}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <Carousel className="project-carousel" indicators={false} interval={null} activeIndex={activeIndex} onSelect={setActiveIndex}>
          {projects.map((project, index) => (
            <Carousel.Item key={index} className="carousel-item" class='card'>
              <Card>
                <Card.Body>
                  <Card.Title className="card-title">{project.title}</Card.Title>
                  <Card.Subtitle className="card-subtitle mb-2">
                    {project.subtitle}
                  </Card.Subtitle>
                  <Card.Text className="card-text">{project.description}</Card.Text>
                  <div className='d-flex justify-content-center my-3'>
                    {project.images.length === 1 ? (
                      <Card.Img className='img-fluid' src={project.images[0]} alt="Project" onClick={() => handleShow(project.images, 0)} style={styles.image} />
                    ) : (
                      <div className="w-100">
                        <Carousel 
                          indicators={true} 
                          controls={false} 
                          interval={7000} 
                          className="image-carousel"
                          style={styles.imageCarousel}
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
                  <Card.Text className="text-center">Click the images to view them in full size</Card.Text>
                  <div className='d-flex justify-content-center gap-2'>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Button className="button" variant="outline-dark"><FaGithub /> GitHub</Button>
                    </a>
                    {project.websiteLink && (
                      <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                        <Button className="button" variant="outline-dark" >{project.websiteButtonText}</Button>
                      </a>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      <Footer />
      <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog" contentClassName="bg-transparent border-0">
        <Modal.Body className="d-flex justify-content-center align-items-center" style={styles.modalBody}>
          <img src={modalImages[currentImageIndex]} alt="Zoomed project" className="img-fluid" style={styles.modalImage} />
          <button type="button" className="btn btn-danger" style={styles.closeButton} aria-label="Close" onClick={handleClose}>
            Close
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const styles = {

  contentContainer: {
    margin: '0 auto',
    maxWidth: '70%',
  },
  headerTitle: {
    color: 'var(--text)',
  },
  image: {
    objectFit: 'cover',
    maxHeight: '50vh',
  },
  imageCarousel: {
    backgroundColor: 'var(--indicator-color)',
  },
  modalBody: {
    height: '100vh',
    padding: 0,
    position: 'relative',
  },
  modalImage: {
    maxWidth: '90vw',
    maxHeight: '90vh',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
};

export default Projects;