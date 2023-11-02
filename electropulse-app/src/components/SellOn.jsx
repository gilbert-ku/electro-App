import React from "react";
import  Image from "../assets/image/sell.jpg"

const SellOn = () => {
    return (
        <section className="sell-on-section">
            <div className="logo-container">
                <img src={Image} alt="Sell on ElectroPulse" />
            </div>
            <div className="text-container">
                <h2 className="sell-text">Do you want to sell and make money on ElectroPulse?</h2>
                <button className="sell-button" ><span>Start</span></button>
            </div>
        </section>
    )
}
export default SellOn;