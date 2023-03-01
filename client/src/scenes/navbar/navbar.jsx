import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li style={{ marginLeft: 'auto' }}><Link to="/login">Login/Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
