import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Electronic Shop. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="#about-us">About Us</a>
            <p>Welcome to ElectroPulse Shop, We are passionate about technology and committed to bringing you the latest and greatest gadgets and devices to enhance your life.</p>
          </li>
          <li>
            <a href="#contact-us">Contact Us</a>
            <p>
              Contact Information:
              <br />
              Phone: 0720000093
              <br />
              Email: <a href="mailto:ElectroPulse@.com">info@ElectroPulse.com</a>
            </p>
          </li>
          <li><a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
