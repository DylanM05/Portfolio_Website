import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';

function ContactPage() {
  const [result, setResult] = useState("");

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
    <div style={{ backgroundColor: 'var(--background)' }}>
      <Header isResumePage={true} />
      <div className="container mt-5" style={{ backgroundColor: 'var(--background)', color: 'var(--text)', minHeight: '84.2vh', paddingBottom: '2rem', overflow: 'hidden' }}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            <div className="card p-4" style={{ backgroundColor: 'var(--background)', color: 'var(--text)', minHeight: '50vh', overflow: 'hidden' }}>
              <h2 className="text-center mb-4" style={{ color: 'var(--title-colour)', fontSize: '50px' }}>Send me an email!</h2>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label" style={{ fontSize: '30px' }}>Name:</label>
                  <input type="text" className="form-control" name="name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{ fontSize: '30px' }}>Contact Email:</label>
                  <input type="email" className="form-control" name="email" required />
                </div>
                <input type="hidden" name="subject" value="Email from your Portfolio Website!" />
                <input type="hidden" name="from_name" value="Portfolio Contact" />
                <div className="mb-3">
                  <label className="form-label" style={{ fontSize: '30px' }}>Message:</label>
                  <textarea name="message" className="form-control" required></textarea>
                </div>
                <div className="text-center">
                  <button className="btn" type="submit" class='button'>Send Email</button>
                </div>
              </form>
              <span className="mt-3 d-block text-center">{result}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;