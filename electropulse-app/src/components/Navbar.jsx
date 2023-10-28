import React from "react";
import { Link } from "react-router-dom"; // You can adjust the routing as needed
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa"; // You may need to install the "react-icons" library
import "./styles.css"; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span className="shop-icon">Electropulse</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <FaSearch />
            </button>
          </form>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/account" className="nav-link">
                <FaUser />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
