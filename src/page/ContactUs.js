import React from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Let’s get in touch!</p>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> 123 Hope Street, Hyderabad, India</p>
          <p><strong>Email:</strong> info@Vanshufoundation.org</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0877235383256!2d78.48672077464995!3d17.451020783248774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b020f22f25%3A0x9f529c4277c8a9b7!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1614295803725!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
