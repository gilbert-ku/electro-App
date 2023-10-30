import React from "react";
import { Link } from "react-router-dom"; 

const Newsletter = () => {
    return (
        <section className="mt-4 custom-section">
            <div className="container-fluid d-flex justify-content-around" id="custom-section">
                <div className="custom-logo">
                    <Link to="/" className="navbar-brand">
                        <span className="shop-icon">electro<span>Pulse</span></span>
                    </Link>
                </div>
                <div>
                    <p className="h4">New to ElectroPulse?</p>
                    <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                    <form className="mt-3 mb-3">
                        <div className="input-group">
                            <input type="email" className="form-control" id="news-form" placeholder="Enter your email" />
                            <button id="custom-button" className="btn btn-warning" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}
export default Newsletter;