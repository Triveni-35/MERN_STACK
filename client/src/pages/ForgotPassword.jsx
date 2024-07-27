import React, { useState } from 'react';
import './forgot.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic (e.g., API call)
    console.log('Email submitted:', email);
    setEmail(''); // Reset the form
  };

  return (
    <div className="forgot-password-wrapper"> {/* New wrapper div */}

    <div className="forgot-password-container">
      <h2 className="forgot-password-title">Forgot Password</h2>
      <p className="forgot-password-description">
        Enter your email address below, and we'll send you a link to reset your password.
      </p>
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="email-input"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ForgotPassword;