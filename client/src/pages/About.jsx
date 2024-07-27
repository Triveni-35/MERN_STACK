import React from 'react';
import './style.css';
import serviceImage from '../assets/service-images/service-img.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <div className="profile">
          <img src={serviceImage} alt="Profile" className="profile-image" />
          <div className="profile-info">
            <h2 className="profile-name">John Doe</h2>
            <p className="profile-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="about-content">
          <h3 className="section-title">Our Story</h3>
          <p class="reset-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p class="reset-p">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
