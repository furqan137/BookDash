// src/pages/Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-container contact-page">
      <header className="page-header">
        <h1>Contact Us</h1>
        <p className="subtitle">
          We're here to help and answer any question you might have. We look forward to hearing from you!
        </p>
        <Link to="/" className="btn-back-home" aria-label="Go back to Home page">
          ← Back to Home
        </Link>
      </header>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          Whether you have a question about features, pricing, or anything else, our team is ready to answer all your inquiries.
        </p>

        <div className="contact-methods">
          <div className="contact-item">
            <h3>Email</h3>
            <p>
              Reach us at: <a href="mailto:support@bookapp.com" className="contact-link">support@bookapp.com</a>
            </p>
          </div>

          <div className="contact-item">
            <h3>Phone</h3>
            <p>
              Call us: <a href="tel:+1234567890" className="contact-link">+1 (234) 567-890</a>
            </p>
          </div>

          <div className="contact-item">
            <h3>Office Address</h3>
            <address>
              Book Dash HQ<br />
              1234 Reading Lane<br />
              Booktown, BK 56789<br />
              United States
            </address>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <p>
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for contacting us! We will get back to you soon.');
          }}
          noValidate
        >
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Your full name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="you@example.com" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Subject of your message" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>

          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
