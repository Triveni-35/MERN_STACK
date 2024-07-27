import React from 'react';
import './style.css'; 
import serviceImage from '../assets/service-images/service-img.png';
const Service = () => {
  return (
    <div className="service-container">
      <div className="service-section">
        <h2>Our Services</h2>
        <div className="service-point">
          <div className="service-text">
            <h3>Service 1 Title</h3>
            <p class="reset-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate mauris et ipsum semper.</p>
          </div>
          <img src={serviceImage} alt="Service 1" className="service-image" />
        </div>
        <div className="service-point reversed">
          <div className="service-text">
            <h3>Service 2 Title</h3>
            <p class="reset-p">Nulla facilisi. Sed ut quam nec felis condimentum consectetur.</p>
          </div>
          <img src={serviceImage} alt="Service 2" className="service-image" />
        </div>
        <div className="service-point">
          <div className="service-text">
            <h3>Service 3 Title</h3>
            <p class="reset-p">Vestibulum id pharetra felis. Curabitur vehicula, ipsum sit amet sollicitudin pretium.</p>
          </div>
          <img src={serviceImage} alt="Service 3" className="service-image" />
        </div>
      </div>
    </div>
  );
}

export default Service;
