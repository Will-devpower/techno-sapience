import React from "react";
import './style.css';

const SocialMediaSidebar = () => {
  return (
    <nav className="smedia-nav">
      <ul className="smedia-ul">
        <li>
          <a href="https://www.facebook.com/TechnoSapience-106380507862357" className="smedia-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
            <span>Facebook</span>
          </a>
        </li>        
        <li>
          <a href="https://instagram.com/technosapience2.0?igshid=13m00jk4wz1m9" className="smedia-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a >
        </li>        
        <li>
          <a href="https://github.com/RWill-Dev/techno-sapience" className="smedia-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            <span>Github</span>
          </a>
        </li>
        <li>
          <a href="https://youtube.com/techno-sapience" className="smedia-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
            <span>Youtube</span>
          </a>
        </li>
        <li>
          <a href="https://tiktok.com/@technosapience" className="smedia-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
            <span>TikTok</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialMediaSidebar;
