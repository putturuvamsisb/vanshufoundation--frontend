import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; // Replace with actual logo
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo + Intro */}
        <div className="footer-logo">
          <img src={logo} alt="Vanshu Foundation Logo" />
          <h2>Vanshu Foundation</h2>
          <p>Bringing hope and light to every life we touch.</p>
        </div>

        {/* Useful Links */}
        {/* Useful Links */}
<div className="footer-links">
  <h3>Quick Links</h3>
  <div className="footer-links-columns">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/donate">Donate</a></li>
      <li><a href="/contact">Contact Us</a></li>
      <li><a href="/volunteer">Volunteer</a></li>
      <li><a href="/events">Events</a></li>
    </ul>
    <ul>
      <li><a href="/getinvolved">Get Involved</a></li>
      <li><a href="/media">Media</a></li>
      <li><a href="/terms">Terms of Service</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/faq">FAQ</a></li>
      <li><a href="/sitemap">Sitemap</a></li>
      <li><a href="/feedback">Feedback</a></li>
    </ul>
  </div>
</div>


        {/* Contact Details */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: contact@Vanshu.org</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Vanshu Lane, Mumbai, India</p>

          <div className="social-icons">
            <a href="www.facebook.com"><FaFacebookF /></a>
            <a href="www.x.com"><FaTwitter /></a>
            <a href="www.instagram.com"><FaInstagram /></a>
            <a href="www.linkedin.com"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Vanshu Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;