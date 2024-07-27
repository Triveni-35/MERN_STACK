/*import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/form/contact', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('Message sent successfully');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error sending message:', error.response ? error.response.data : error.message);
      alert('Error sending message');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
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
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
*/
import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/form/contact', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('Message sent successfully');
      console.log('Response:', response.data);

      // Reset form data after successful submission
      setFormData({
        username: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error.response ? error.response.data : error.message);
      alert('Error sending message');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
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
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
