import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Cart from './Cart';
import axios from 'axios';

const ProductsContainer = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5555/products");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (card) => {
    const existingCartItem = cartItems.find((item) => item.id === card.id);

    if (existingCartItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === card.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...card, quantity: 1 }]);
    }
  };

  const handleRemove = (id) => {
    const arr = cartItems.filter((item) => item.id !== id);
    setCartItems(arr);
  };

  return (
    <>
      <Cards data={data} setCartItems={setCartItems} cartItems={cartItems} handleAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} handleRemove={handleRemove} />
    </>
  );
};

export default ProductsContainer;
