import React from 'react';
import './style.css'; // Import the CSS file for styling
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <div className="home-container">
      <section className="section section-left">
        <div className="text">
          <h1>Welcome to Our Website</h1>
          <p class="reset-p">This is some introductory text on the left side of the page.</p>
        </div>
        <div className="image">
          <img src="https://via.placeholder.com/400" alt="Placeholder" />
        </div>
      </section>
      <section className="section section-right">
        <div className="image">
          <img src="https://via.placeholder.com/400" alt="Placeholder" />
        </div>
        <div className="text">
          <h1>Our Services</h1>
          <p class="reset-p">This is some information about our services on the right side of the page.</p>
        </div>
      </section>
    </div>
    <Footer />
</>
  );
}

export default Home;
