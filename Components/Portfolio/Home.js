import React from 'react';

export default function Home() {
  return (
    <section id="home" className="section">
      <div className="container">
        <div className="profile-image">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/97b479_image.png" 
            alt="Sahar Eitam" 
          />
        </div>
        <h1>Sahar Eitam</h1>
        <h2>Software Engineering Student</h2>
        <p className="intro">
          Dedicated 3rd year Software & Information Systems Engineering student at Ben Gurion University 
          with a strong foundation in Full Stack development, machine learning, and software architecture. 
          Experienced with Frontend/Backend development, RESTful APIs, SQL databases, and cloud technologies. 
          Enthusiastic about algorithm development and scientific computing.
        </p>
        <div className="social-links">
          <a 
            href="https://github.com/sahareitam" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn"
          >
            <i className="icon-github"></i>
          </a>
          <a 
            href="https://linkedin.com/in/sahar-eitam-73b732228" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-btn"
          >
            <i className="icon-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}