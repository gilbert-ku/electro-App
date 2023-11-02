import React, { useState } from "react";
import Image from "../assets/image/sell.jpg";


const SellOn = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <section className="sell-on-section">
            <div className="logo-container">
                <img src={Image} alt="Sell on ElectroPulse" />
            </div>
            <div className="text-container">
                <h2 className="sell-text">Do you want to sell and make money on ElectroPulse?</h2>
                <button className="sell-button" onClick={toggleModal}>
                    <span>Start</span>
                </button>
            </div>
            {showModal && (
                <div className="modal-container">
                    <div className="modal">
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <h2>Fill in your information</h2>
                        <form>
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                            <input type="text" placeholder="Contact"/>
                            <input type="password" placeholder="Password"/>
                        </form>
                        <div className="modal-buttons">
                            <button className="modal-close" onClick={toggleModal}>Close</button>
                            <button className="modal-proceed">Proceed</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SellOn;
