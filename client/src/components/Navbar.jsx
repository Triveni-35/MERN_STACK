import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file for styling

const Navbar =()=> {
  return (
    <>
      <header className='navbar'>
        <div className='logo-brand'>
          <Link to='/'>Logo</Link>
        </div>
        <nav>
          <ul className='nav-links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/service'>Services</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
