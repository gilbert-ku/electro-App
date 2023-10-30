import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa"; // You may need to install the "react-icons" library


function Footer() {
  return (
    <footer className="footer bg-dark">
      <div className="container text-start">
        <div className="row">
          <div className="col-lg-3 col-md-6 ">
            <h5>Need Help?</h5>
            <ul className="list-unstyled help-icons">
              <li className="help-icons">
                <a id="help-icons" href='#'>Help Center</a>
              </li>
              <li className="help-icons">
                <a id="help-icons" href='#'>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>About</h5>
            <ul className="list-unstyled help-icons">
              <li className="help-icons">
                <a id="help-icons" href='#'>About us</a>
              </li>
              <li className="help-icons">
                <a id="help-icons" href='#'>Terms & conditions</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12">
            <h5>Payment methods</h5>
            {/* here insert mpesa logo and paypal logo */}

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="social-icons list-unstyled text-start">
                <a className="icons" href="#">
                  <FaInstagram className="larger-icon" />
                </a>
                <a className="icons" href="#">
                  <FaWhatsapp className="larger-icon" />
                </a>
                <a className="icons" href="#">
                  <FaLinkedin className="larger-icon" />
                </a>
                <a className="icons" href="#">
                  <FaYoutube className="larger-icon" />
                </a>
                <button className="btn btn-warning button-sell">Sell on Electro<span>Pulse</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container line-space">

      </div>

    </footer>
  );
}

export default Footer;
