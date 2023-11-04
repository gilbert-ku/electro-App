
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

  return (
    <>
      <Cards data={data} setCartItems={setCartItems} cartItems={cartItems} />
      <Cart cartItems={cartItems} />
    </>
  );
};

export default ProductsContainer;