import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa"; // You may need to install the "react-icons" library


function Footer() {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h5>Need Help?</h5>
            <ul className="list-unstyled">
              <li>
                <a href='#'>Help Center</a>
              </li>
              <li>
                <a href='#'>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>Contact Us</h5>
            <p>Contact Information:</p>
            <p>Phone: 0720000093</p>
            <p>Email: <a href="mailto:info@ElectroPulse.com">info@ElectroPulse.com</a></p>
          </div>
          <div className="col-lg-4 col-md-12">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer" className="text-light">Instagram</a></li>
              <li><a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer" className="text-light">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="social-icons">
                <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fbrandlogos.net%2Fwp-content%2Fuploads%2F2016%2F05%2FInstagram-logo-icon.png&tbnid=bSqgATMCPwvAIM&vet=12ahUKEwiYl63605iCAxXCW6QEHUSDDcMQMygGegUIARCAAQ..i&imgrefurl=https%3A%2F%2Fbrandlogos.net%2Finstagram-new-vector-logo-color-download-89831.html&docid=riTX_d22nmk7BM&w=768&h=768&q=instagram%20logo&ved=2ahUKEwiYl63605iCAxXCW6QEHUSDDcMQMygGegUIARCAAQ/">
                  <FaInstagram />
                </a>
                <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F022%2F101%2F124%2Foriginal%2Fwhatsapp-logo-transparent-free-png.png&tbnid=iWyT6zVOiUSnjM&vet=12ahUKEwjOgO2u05iCAxWMvycCHeDvDLMQMygCegQIARB4..i&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Fpng%2F22101124-whatsapp-logo-transparent-png&docid=e-jGm-iyUgEGwM&w=1920&h=1920&q=whatsapp%20logo&ved=2ahUKEwjOgO2u05iCAxWMvycCHeDvDLMQMygCegQIARB4/">
                  <FaWhatsapp />
                </a>
                <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F81%2FLinkedIn_icon.svg%2F1200px-LinkedIn_icon.svg.png&tbnid=HqwCO2tLCRN_zM&vet=12ahUKEwj2tsKt1JiCAxWrRqQEHRbhBMYQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ALinkedIn_icon.svg&docid=2fIqtQlZiHhzZM&w=1200&h=1200&q=linkedin%20logo&ved=2ahUKEwj2tsKt1JiCAxWrRqQEHRbhBMYQMygAegQIARB0/">
                  <FaLinkedin />
                </a>
                <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fe%2Fef%2FYoutube_logo.png%3F20220706172052&tbnid=U9N_wOS6bY-kJM&vet=12ahUKEwi-oePk1JiCAxVzXKQEHco4CXQQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AYoutube_logo.png&docid=IqBe9byh9uE3FM&w=640&h=443&q=youtube%20logo&ved=2ahUKEwi-oePk1JiCAxVzXKQEHco4CXQQMygAegQIARB0/">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
