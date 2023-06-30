import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Footer from './Components/Footer.css';
const Footer = () => {
  return (
    <div>
      <div className="text-center ">
        <h2>We have what you're looking for</h2>
        <p className="card-text" style={{ color: '#4B2473' }}>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </p>
        <button
          type="button"
          className="btn btn-primary btn-lg gradient-button"
        >
          Get started Now
        </button>
      </div>
      <hr />
      <div
        className="sb_footer-below-links "
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'purple',
        }}
      >
        <div className="sb_footer-below" style={{ color: 'white' }}>
          <div className="sb_footer-copyright">
            <p>All right reserved &copy; {new Date().getFullYear()} </p>
          </div>
        </div>
        <div
          className="sb_footer-links_div"
          style={{ display: 'flex', gap: '20px' }}
        >
          <a href="/" target="_blank">
            Terms of Service
          </a>
          <a href="/" target="_blank">
            Privacy Policy
          </a>
          <a href="/" target="_blank">
            Product
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" color="white" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
