import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      console.log('Registration successful:', response.data);
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      alert('Registration successful!');
    } catch (error) {
      console.error('Error during registration:', error.response ? error.response.data : error.message);
      alert('Registration failed. Please try again.');
    }
  };


  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
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
            <label>Create Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Re-enter Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <div className="login-link">
          <p class="reset-p">Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
};
export default Register;