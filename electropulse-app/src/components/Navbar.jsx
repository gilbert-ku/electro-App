import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <span>Electropulse</span>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search products..." />
                <button>Search</button>
            </div>
            <div className="icons">
                <div className="account-icon">
                    <i className="fas fa-user"></i> {/* You can use an icon library like Font Awesome */}
                </div>
                <div className="cart-icon">
                    <i className="fas fa-shopping-cart"></i> {/* You can use an icon library like Font Awesome */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
