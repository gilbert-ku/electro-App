// Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/help-center">Help Center</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
