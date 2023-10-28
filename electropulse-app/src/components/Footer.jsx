import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa"; // You may need to install the "react-icons" library
import "./styles.css"; 

function Footer() {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>About Us</h5>
            <p>
              Welcome to Electropulse! We're a tech-savvy team passionate about providing the latest electronic gadgets and accessories to tech enthusiasts worldwide. Founded in 2010, our mission is to make cutting-edge technology accessible to everyone. We take pride in offering a wide range of products, from smartphones to smart home devices, and providing top-notch customer service.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Contact Us</h5>
            <p>
              We'd love to hear from you! If you have any questions, comments, or concerns, please don't hesitate to reach out. You can contact us via email at support@electropulse@gmail.com or call our customer support team at +254 0720000093. Our physical store is located at moi avenue, Your City, Nairobi. For online inquiries, you can also use the contact form below. We're active on social media, so connect with us on Facebook, Twitter, and Instagram.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Help Center</h5>
            <p>
              Our Help Center is designed to assist you with any questions or problems you may encounter. You can find answers to frequently asked questions in our FAQs section. For step-by-step instructions on using our products, check out our tutorials. If you're facing issues with a product, our troubleshooting guides can help you find a solution. We also provide information on our warranty and return policies, as well as our terms and conditions for using our services.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Payment Methods</h5>
            <ul className="list-inline list-unstyled">
              <li className="list-inline-item">
                <a href="/data:image/png;base64,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">
                  M-Pesa: &#x20A9;
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/data:image/png;base64,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">
                  <img
                    src="/paypal.png"
                    alt="PayPal"
                    className="payment-icon"
                  />
                </a>
              </li>
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
