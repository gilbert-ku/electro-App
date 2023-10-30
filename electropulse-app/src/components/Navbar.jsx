import React from "react";
import { Link } from "react-router-dom"; // You can adjust the routing as needed
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa"; // You may need to install the "react-icons" library


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <span className="shop-icon">electro<span>Pulse</span></span>
        </Link>
       
      </div>
      <div className="container">


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
              placeholder="search products and categories"
              aria-label="Search"
            />
            <button id="search-button" className="btn btn-outline-success" type="submit">
              <FaSearch />
            </button>
          </form>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FaUser /> account
                </a>
                <ul id="auth-button" className="dropdown-menu text-center justify-content-center" aria-labelledby="navbarDropdownMenuLink">
                  <a id="login-button" className='nav-link' href='/login'>Login</a>
                  <a id="signup-button" className='nav-link' href='/signup'>Signup</a>
                </ul>
              </li>
             
            </ul>
          </div>
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <Link to="/cart" className="nav-link" id="cart-button">
                <FaShoppingCart /> Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;