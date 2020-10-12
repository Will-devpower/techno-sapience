import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

const SocialMediaSidebar = () => {
  return (
    <nav className="smedia-nav">
      <ul className="smedia-ul">
        <li>
          <Link to="/" className="smedia-link">
            <i className="fab fa-facebook-f"></i>
            <span>Facebook</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="smedia-link">
            <i className="fab fa-twitter"></i>
            <span>Twitter</span>
          </Link >
        </li>
        <li>
          <Link to="/" className="smedia-link">
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </Link >
        </li>
        <li>
          <Link to="/" className="smedia-link">
            <i className="fab fa-linkedin-in"></i>
            <span>Linkedin</span>
          </Link >
        </li>
        <li>
          <Link to="/" className="smedia-link">
            <i className="fab fa-github"></i>
            <span>Github</span>
          </Link >
        </li>
        <li>
          <Link to="/" className="smedia-link">
            <i className="fab fa-youtube"></i>
            <span>Youtube</span>
          </Link >
        </li>
      </ul>
    </nav>
  );
};

export default SocialMediaSidebar;
