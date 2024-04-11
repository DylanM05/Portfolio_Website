import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ThemeContext } from './Theme/ThemeContext';
import '../App.css';
import './Styles/Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCommentDots  } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  const { theme } = useContext(ThemeContext);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [hardSkills, setHardSkills] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);
  const [volunteer, setVolunteer] = useState([]);

  useEffect(() => {
    const api = axios.create({
      baseURL: 'https://localhost:3001' 
    });
  
    api.get('/api/populate')
      .then(response => {
        setEducation(response.data.education);
        setExperience(response.data.experience);
        setHardSkills(response.data.hardskills);
        setSoftSkills(response.data.softskills);
        setVolunteer(response.data.volunteer);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={`resume container-fluid ${theme === 'dark' ? 'dark-mode' : ''}`}> 
      <div className="section">
        <div className="row">
          <div className="col-md-2 align-right">
            <a href="" target="_blank" rel="noopener noreferrer">
              <div className="btn btn-dark resume-button">View PDF</div>
            </a>
          </div>
          <div className="col-md-10">
            <h1 className="resume-name align-right">Dylan McMullen</h1>
            <address className="address align-right">
              Keene, Ontario, K0L 2G0<br />
              (705) 768 – 3136<br />
              Dylan.mcmullen@live.com
            </address>
            <section className="profile-section align-right">
              <p>
                Full Stack Web Developer | Software Engineer | Data Analysis
              </p>
            </section>
          </div>
        </div>
        <div className="row">
  <div className="col-md-4 vline tline">
    {education.length > 0 && (
      <>
        <br />
        <h3 className="headings-resume">EDUCATION</h3>
        <ul>
          {education.map((item, index) => (
            <li key={index}>
              <strong>{item.institution}</strong> - <em>{item.year}</em><br />
              {item.qualification && <span>{item.qualification}</span>}
            </li>
          ))}
        </ul>
      </>
    )}
    <br />
            <h3 className="headings-resume">VOLUNTEER OPPORTUNITIES</h3>
            <ul>
              {volunteer.map((opportunity, index) => (
                <li key={index}>
                  <strong>{opportunity.organization}</strong> - <em>{opportunity.startDate}</em><br/>
                  {opportunity.role} </li>
              ))}
            </ul>
          </div>
          <div className="col-md-8 tline">
            <h3 className="headings-resume">HARD SKILLS</h3>
            <ul className="programming-list skills-grid">
              {hardSkills.map((skillObject, index) => (
                skillObject.skills.map((skill, subIndex) => (
                  <li key={`${index}-${subIndex}`}>
                    <FontAwesomeIcon icon={faCode} className="list-icon" /> 
                    {skill}
                  </li>
                ))
              ))}
            </ul>
            <br />
            <h3 className="headings-resume">SOFT SKILLS</h3>
            <ul className="programming-list skills-grid">
              {softSkills.map((skillObject, index) => (
                skillObject.skills.map((skill, subIndex) => (
                  <li key={`${index}-${subIndex}`}>
                    <FontAwesomeIcon icon={faCommentDots} className="list-icon"  /> 
                     {skill}
                  </li>
                ))
              ))}
            </ul>
          </div>
        </div>

<div className="row">
  <div className="col-md-12  tline">
    <h3 className="headings-resume">EXPERIENCE</h3>
  </div>
  {experience.map((job, index) => (
    <div key={index} className="col-md-6"> 
      <div className={`p-2 ${index > 0 ? 'ml-md-5' : ''}`}>
       <strong> <h4 className='experience'>{job.company}</h4> 
       <em> <p className='experience'>{job.startDate} – {job.endDate}</p> </em></strong>
        <ul className='job-responsibility'>
          {job.responsibilities.map((responsibility, idx) => (
            <li key={idx}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Resume;
