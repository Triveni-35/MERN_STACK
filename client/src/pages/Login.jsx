/* import React, { useState } from 'react';
import axios from 'axios';
import './style.css'; 
import ForgotPassword from './ForgotPassword'; 

import { Link } from 'react-router-dom';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Sending login request with:', formData);
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });
      console.log('Login successful:', response.data);
      // Handle successful login (e.g., store token, redirect, etc.)
      alert('Login successful!');
      // Example: Save token to localStorage
      localStorage.setItem('token', response.data.token);
      
      // Reset the form
      setFormData({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data : error.message);
      alert('Login failed. Please check your email and password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="forgot-password">
  <Link to="/forgot-password">Forgot password?</Link>
</div>
      </div>
    </div>
  );
}

export default Login;
*/
import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import ForgotPassword from './ForgotPassword';
import { Link } from 'react-router-dom';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      console.log('Sending login request with:', formData);
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });
      console.log('Login successful:', response.data);
      alert('Login successful!');
      localStorage.setItem('token', response.data.token);
      setFormData({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data : error.message);
      alert('Login failed. Please check your email and password.');
    }
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="forgot-password">
  <Link to="/forgot-password">Forgot password?</Link>
</div>
      </div>
    </div>
  );
}


export default Login;


