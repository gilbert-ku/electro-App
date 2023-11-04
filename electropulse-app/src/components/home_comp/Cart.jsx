import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="d-flex flex-wrap">
          {cartItems.map((cartItem) => (
            <div className="col" key={cartItem.id}>
              <div className="card border border-success shadow p-3 mb-5 bg-body rounded">
                <img src={cartItem.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">{cartItem.brand}</p>
                  <p className="card-title">{cartItem.name}</p>
                  <p className="card-text">Quantity: {cartItem.quantity}</p>
                  <p className="card-text">Price: Ksh {cartItem.price * cartItem.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;