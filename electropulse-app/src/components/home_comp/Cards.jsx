import React, { useEffect, useState } from 'react';
import axios from 'axios';
import backgroundImg from '../../assets/image/background.jpeg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Cards = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // set state to handle clicked cards
 

  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5555/products");
        setData(response.data);
        console.log( response.data); 

      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);



  // onclick event for the recent views cards


  return (
    <>
      <div className='container'>
        <div className='container  w-100 h-50'>
          <h1 className='bg-warning rounded-top p-2'>Recently Viewed</h1>
          <div className='container' >
            <div className="row row-cols-1 row-cols-lg-4  g-lg-4">
              
              {data && data.map((d) => (
                <div className="col">
                  <div className="card border border-warning shadow p-3 mb-5 bg-body rounded " style={{ width: '18rem', height: "30rem"}} >
                  {/* <img src={backgroundImg} className="card-img-top" alt="..." /> */}
                    <img src={d.image_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">{d.brand}</p>
                      <h5 className="card-title">{d.name}</h5>
                      
                      {/* <p className="card-text">{d.description}</p> */}
                      <p className="card-text">Ksh: {d.price}</p>
                    </div>
                    
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>    
    </>
  );
}  
export default Cards;

