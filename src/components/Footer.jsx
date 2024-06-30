import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; // Make sure to import your stylesheet

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" >
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section address">
            <h3>Our Office</h3>
            <p>69B Palai Road west,First Floor 3RD Mile.</p>
            <p>Thoothukudi-627428, India</p>
            <p>Contact:+91 93602 54607, +91 86103 62606</p>
          </div>
          <div className="footer-section social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61561358243611&mibextid=ZbWKwL" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/kingtechbuilders?igsh=MTBsajY0eHBqb3M1eA==" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://youtube.com/@kingtechbuilders?si=xsyiZBXIAhqV9qxu" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="mailto:kingtechbuilders@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} King Tech Builders. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
