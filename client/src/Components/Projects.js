import React, { useState, useEffect } from 'react';
import { Card, Modal, Button, Carousel, Container } from 'react-bootstrap';
import { DiAndroid } from "react-icons/di";
import { SiPython, SiPreact, SiBootstrap, SiMongodb } from "react-icons/si";
import { FaNodeJs, FaGithub } from "react-icons/fa";
import { BiSolidFileCss } from "react-icons/bi";
import { TbFileTypeXml, TbBrandKotlin } from "react-icons/tb";

import Header from './Header';
import Footer from './Footer';

import './Styles/Projects.css';
import Ethgas from '../Images/ethgas.png';
import Maticgas from '../Images/maticgas.png';
import androidapp1 from '../Images/androidapp1.png';
import portfolioapp1 from '../Images/portfolioapp1.png';
import portfolioapp2 from '../Images/portfolioapp2.png';
import ezdeals1 from '../Images/ezdeals1.png';
import ezdeals2 from '../Images/ezdeals2.png';
import portainer from '../Images/portainer.png';
import webscrape from '../Images/webscrape.png';

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (images, index) => {
    setModalImages(images);
    setCurrentImageIndex(index);
    setShow(true);
  };

  useEffect(() => {
    const controls = document.querySelectorAll('.carousel-control-prev, .carousel-control-next');

    const handleBlur = (event) => {
      event.target.blur();
    };

    controls.forEach(control => {
      control.addEventListener('click', handleBlur);
    });

    return () => {
      controls.forEach(control => {
        control.removeEventListener('click', handleBlur);
      });
    };
  }, []);

  const projects = [
    {
      title: 'ETH / MATIC gas Discord Bot',
      subtitle: <div>Language: <SiPython /> Python </div>,
      description: 'I made this in 2022, when Cryptocurrency was all the hype. This is a discord bot that retrieves the gas price of ETH and MATIC using Etherscan or polygonscan',
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
      description: 'This is a webscraper that I made using Python. It scrapes the Indeed website for job postings with specified keywords and stores them in a CSV file.',
      images: [webscrape],
      githubLink: 'https://github.com/DylanM05/IndeedWebScraper',
      buttonText: 'GitHub'
    },
    {
      title: 'Home Media & Cloud server',
      subtitle: <div>Running: Ubuntu Server and seperating everything into Docker containers</div>,
      description: 'This is a server that I made using Ubuntu Server. It runs a Plex server, Nextcloud server, and a few other services. I have everything separated into Docker containers for easy management. I have also created an automated backup script that runs every week, and replaces the old backup with the new one.',
      images: [portainer],
    }
  ];

  return (
    <div className="App" style={{ backgroundColor: 'var(--Resume-background)', color: 'var(--Resume-text)' }}>
      <Header />
      <Container className="content">
        <h1 className='text-center display-4 my-4' style={{color: 'var(--Resume-text)' }}>My Projects</h1>
        <Carousel interval={null}>
          {projects.map((project, index) => (
            <Carousel.Item key={index} className="carousel-item">
<Card className="project" style={{ color: 'var(--Resume-text)', boxShadow: `0 4px 20px var(--shadow-color)`, border: 'none', height: '1500px' }}>
  <Card.Body>
    <Card.Title className="card-title">{project.title}</Card.Title>
    <Card.Subtitle className="card-subtitle mb-2" style={{ color: 'var(--Resume-text)' }}>
      {project.subtitle}
    </Card.Subtitle>
    <Card.Text className="card-text" style={{ color: 'var(--Resume-text)' }}>{project.description}</Card.Text>
    <div className='d-flex justify-content-center my-3'>
      {project.images.length === 1 ? (
        <Card.Img className='img-fluid' src={project.images[0]} alt="Project" onClick={() => handleShow(project.images, 0)} style={{ objectFit: 'cover'}} />
      ) : (
        <div className="w-100">
          <Carousel 
            indicators={true} 
            controls={false} 
            interval={7000} 
            className="image-carousel" 
            style={{ backgroundColor: 'var(--indicator-color)' }}
          >
            {project.images.map((image, i) => (
              <Carousel.Item key={i} onClick={() => handleShow(project.images, i)}>
                <img className="d-block w-100 image-carousel" src={image} alt={`Slide ${i}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </div>
    <Card.Text className="text-center" style={{ color: 'var(--Resume-text)' }}>Click the images to view them in full size</Card.Text>
    <div className='d-flex justify-content-center gap-2'>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        <Button variant="outline-dark" style={{ backgroundColor: 'var(--Resume-button)', color: 'var(--Resume-button-text)' }}><FaGithub /> GitHub</Button>
      </a>
      {project.websiteLink && (
        <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outline-dark" style={{ backgroundColor: 'var(--Resume-button)', color: 'var(--Resume-button-text)' }}>{project.websiteButtonText}</Button>
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
        <Modal.Body className="d-flex justify-content-center align-items-center" style={{ height: '100vh', padding: 0, position: 'relative' }}>
          <img src={modalImages[currentImageIndex]} alt="Zoomed project" className="img-fluid" style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
          <button type="button" className="btn btn-danger" style={{ position: 'absolute', top: '10px', right: '-25vw' }} aria-label="Close" onClick={handleClose}>
            Close
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Projects;