import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Resume.css'; 

const Resume = () => {
  return (
    <div className="container-fluid">
      <div className="section">
        <div className="row">
          <div className="col-md-2">
            <a href="" target="_blank" rel="noopener noreferrer">
              <div className="btn btn-dark">View PDF</div>
            </a>
          </div>
          <div className="col-md-10">
            <h1 className="resume-name">Dylan McMullen</h1>
            <address>
              Keene, Ontario, K0L 2G0<br />
              (705) 768 – 3136<br />
              Dylan.mcmullen@live.com
            </address>
            <section className="profile-section">
              <p>
                Punctual and reliable. Organized with close attention to detail.
                Self-directed, resourceful, enthusiastic, and strategic. Values strong communication
                and collaboration amongst team members. Promotes a diverse and inclusive work environment.
              </p>
            </section>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4 vline tline">
            <br />
            <h3 className="headings-resume">EDUCATION</h3>
            <ul>
              <li>Centennial College – Software Engineering (2022/2023)</li>
              <li>Pest Control License (2022/2023)</li>
              <li>Quinte Adult Education – High school (2022/2023)</li>
              <li>Forklift License (2021)</li>
              <li>Propane Safety & Handling (2017)</li>
              <li>First aid & CPR (2017)</li>
              <li>G license (2015)</li>
            </ul>
            <br />
            <h3 className="headings-resume">EXPERIENCE</h3>
            <div>
              <h4>Kawartha Pine Ridge District School Board (2017 – Current)</h4>
              <ul>
                <li>Basic cleaning & minor building maintenance</li>
                <li>Operating floor scrubbing machines & disinfecting spray machines</li>
                <li>Opening & Closing facilities, making sure they are secure, and alarm is armed</li>
                <li>Water system monitoring</li>
                <li>Playground safety inspections</li>
              </ul>
            </div>
            <div>
              <h4>Cavan - Monaghan Township, Parks & Facilities Dept. (2012–2017)</h4>
              <ul>
                <li>Machine maintenance and operation of lawn mowers, weed eaters, tractors, work trucks, and ice resurfacing machines</li>
                <li>Propane handling & safety</li>
                <li>Refrigeration room readings</li>
                <li>Baseball & Soccer field maintenance</li>
              </ul>
              <h3 className="headings-resume">VOLUNTEER OPPORTUNITIES</h3>
            <ul>
              <li>St Vincent's Kitchen – Kitchen Prep & Serving (2012)</li>
              <li>Fairport Montessori Academy – Classroom Assistant (2021)</li>
            </ul>
            </div>
          </div>
          <div className="col-md-8 tline">
  <br />
  <h3 className="headings-resume">HARD SKILLS</h3>
  <ul>
    <li>Programming knowledge in:
      <ul>
        <li>JavaScript (including Express.js and React.js)</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Java</li>
        <li>Python</li>
        <li>Kotlin (Android)</li>
        <li>C#</li>
        <li>SQL</li>
        <li>noSQL</li>
      </ul>
    </li>
    <li>Knowledgeable in website design and development.</li>
    <li>Experienced with Git Experienced with version control systems like Git and Github</li>
    <li>Basic understanding of TCP and UDP protocols</li>
    <li>Highly proficient in MS Office suite</li>
    <li>Skilled in building computers and troubleshooting hardware issues.</li>
    <li>Familiar with Windows OS and Linux OS, including creating and managing virtual machines</li>
    <li>Exceptional internet skills including research and information retrieval</li>
  </ul>
            <br />
            <h3 className="headings-resume">SOFT SKILLS</h3>
            <ul>
                <li>Strong communication skills</li>
                <li>Excellent problem-solving skills</li>
                <li>Ability to work in a team environment</li>
                <li>Strong organizational skills</li>
                <li>Ability to work under pressure</li>
                <li>Excellent time management skills</li>
                <li>Ability to multitask</li>
                <li>Strong attention to detail</li>
                <li>Strong work ethic</li>
                <li>Ability to work independently</li>
                <li>Strong interpersonal skills</li>
                <li>Strong leadership skills</li>
            </ul>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;