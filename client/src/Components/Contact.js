import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles/Contact.css';
import Header from './Header';


function ContactPage() {
  const [textMessage, setTextMessage] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [result, setResult] = useState("");
  const [cooldownStart, setCooldownStart] = useState(null);


  let remainingMinutes = 0;
  let now = new Date();
  let cooldownEnd = null;
  
  if (cooldownStart) {
    cooldownEnd = new Date(cooldownStart.getTime() + 60 * 60 * 1000);
    remainingMinutes = Math.round((cooldownEnd - now) / 1000 / 60);
  }

useEffect(() => {
  const cooldownStart = new Date(localStorage.getItem('cooldownStart'));
  setCooldownStart(cooldownStart);
}, []);

  const api = axios.create({
    baseURL: 'https://dylanmcmullen.onrender.com',  
  });

  const clearTextFields = () => {
    setName('');
    setContact('');
    setTextMessage('');
  };


  const handleTextSubmit = async (event) => {
    event.preventDefault();
    const now = new Date();
    localStorage.setItem('cooldownStart', now);
    setCooldownStart(now);
    try {
      const message = `Name: ${name}, Contact: ${contact}, Message: ${textMessage}`;
      const response = await api.post('/contact/sendtext', { message });
      console.log(response.data);
      clearTextFields();
    } catch (error) {
      if (error.response && error.response.status === 429) {
        alert("Too many requests, please wait an hour before trying again");
      } else {
        console.error(error);
      }
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8b7e7b78-c32e-4455-9ac7-8d835c068963");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div>
    <Header isResumePage={true} />
    
    <div className="contact">
    <h1 className="contact-name">Contact Me</h1>
    
    <div className="contact-form">
      <div className="contact-section">
        <h2 className="contact-heading">Send me a text!</h2>
        <form onSubmit={handleTextSubmit}>
  
  <div className="contact-field">
    <label className="contact-label">Name:</label>
    <input type="text" className="contact-input" value={name} onChange={(e) => setName(e.target.value)} />
  </div>
  
  <div className="contact-field">
    <label className="contact-label">Contact Number or Email:</label>
    <input type="text" className="contact-input" value={contact} onChange={(e) => setContact(e.target.value)} />
  </div>
  
  <div className="contact-field">
    <label className="contact-label">Message:</label>
    <textarea className="contact-textarea" value={textMessage} onChange={(e) => setTextMessage(e.target.value)} />
  </div>
  
<div className="button-container">
  <button className="card-button" type="submit" disabled={cooldownStart && now < cooldownEnd}>Send Text</button>
</div>
{cooldownStart && now < cooldownEnd && <p>You must wait {remainingMinutes} minutes to send another text.</p>}
</form>
      </div>
      <div className="contact-section">     
        <h2 className="contact-heading">Send me an email!</h2>
        <div>
      <form onSubmit={onSubmit}>
         
          <div className="contact-field">
      <label className="contact-label">Name:</label>
        <input type="text" className="contact-input" name="name" required/>
        </div>
        
        <div className="contact-field">
        <label className="contact-label">Contact Email:</label>
        <input type="email" className="contact-input" name="email" required/>
        </div>
        
        <input type="hidden" name="subject" value="Email from your Portfolio Website!"></input>
        <input type="hidden" name="from_name" value="Portfolio Contact"></input>
        
        <div className="contact-field">
        <label className="contact-label">Message:</label>
        <textarea name="message" className="contact-textarea" required></textarea>
        </div>

        <div class="button-container">
        <button className="card-button"  type="submit">Send Email</button>
        </div>

      </form>
      </div>
      <span>{result}</span>

    </div>
    </div>
    </div>
    </div>
  );
}

export default ContactPage;