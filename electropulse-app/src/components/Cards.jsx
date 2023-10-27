
import React, { useState, useEffect } from "react";
import axios from "axios";

const Cards = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://kohls.p.rapidapi.com/categories/list',
        headers: {
          'X-RapidAPI-Key': 'c355c9c215msh4ab47fb85d1669fp139939jsnbb46094711c3',
          'X-RapidAPI-Host': 'kohls.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log(setData(response.data));
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

return (
    <div className="container">
        {/* handles error message */}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div className="bg-light">
          {data.payload.categories.map((category) => (
            <div key={category.ID} className="container text-center my-5">
                {/* category name */}
                <div className="container bg-warning rounded-top-3 mb-3">
                    <h1>{category.name}</h1>
                </div>
              
                
            </div>
          ))}
        </div>
      )}
    </div>
  );

}
export default Cards;


