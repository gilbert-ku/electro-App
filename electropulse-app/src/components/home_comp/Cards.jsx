// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import backgroundImg from '../../assets/image/background.jpeg';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";


// const Cards = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   // set state to handle clicked cards
//   const [selectedCards, setSelectedCards] = useState([])
 

//   // fetch data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:5555/products");
//         setData(response.data);
//         console.log( response.data); 

//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError(response.error);
//       }
//     };

//     fetchData();
//   }, []);



  // // onclick event for the recent views cards
  // const handleCardClick = (cardid) => {

  //   setSelectedCards(prevSelectedCards => [...prevSelectedCards, cardid])

  //   console.log(`Card with id ${cardid} clicked`)

  // }

//   return (
//     <>
//       {/* Recently Viewed*/}
//       <div className='container w-100 '>
//         <p>Recently Viewed</p>
//           <div className='container'>
//               {selectedCards.map((selectedCardId) => {
//                 const selectedCard = data.find(card => card.id === selectedCardId);
//                 return (
//                   <div className="col" key={selectedCardId}>
//                     {/* cards */}
//                     <div 
//                       className="card border border-warning shadow p-3 mb-5 bg-body rounded"
//                       style={{ width: '15rem', height: "22rem"}}
//                     >
//                       <img src={selectedCard.image_url} className="card-img-top" alt="..." />
//                       <div className="card-body">
//                         <p className="card-text">{selectedCard.brand}</p>
//                         <p className="card-title">{selectedCard.name}</p>
//                         <p className="card-text">Ksh: {selectedCard.price}</p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//         </div>

    
      //   {/* products rendering  */}

        
      // <div className='container'>
      //   <div className='container  w-100 '>
      //     {/* <h1 className='bg-warning rounded-top p-2'>Recently Viewed</h1> */}
      //       <div className='container' >
      //         <div className="d-flex flex-wrap">              
      //           {data && data.map((d) => (
      //             <div className="col" key={d.id}>
      //               {/* cards */}
      //               <div 
      //               onClick={() => handleCardClick(d.id)}
      //               className="card border border-warning shadow p-3 mb-5 bg-body rounded "
      //               style={{ width: '15rem', height: "22rem"}}
      //               >
      //               {/* <img src={backgroundImg} className="card-img-top" alt="..." /> */}
      //                 <img src={d.image_url} className="card-img-top" alt="..." />
      //                 <div className="card-body">
      //                   <p className="card-text">{d.brand}</p>
      //                   <p className="card-title">{d.name}</p>
                        
      //                   {/* <p className="card-text">{d.description}</p> */}
      //                   <p className="card-text">Ksh: {d.price}</p>
      //                 </div>
                      
      //               </div>
      //             </div>

      //           ))}
      //         </div>
      //       </div>
      //   </div>
      // </div>    
//     </>
//   );
// }  
// export default Cards;


import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Cards = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCards, setSelectedCards] = useState([])
  // Add autoplay functionality 
  const [autoplay, setAutoplay] = useState(true);

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

  

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    // breackpoins
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

    // onclick event for the recent views cards
    const handleCardClick = (cardid) => {

      setSelectedCards(prevSelectedCards => [...prevSelectedCards, cardid])
  
      console.log(`Card with id ${cardid} clicked`)
  
    }
  
  return (
    <>
      <div className='container pt-2 pb-5'>
        {/* <h2>Auto Play & Pause without buttons</h2> */}
        <div className='container '>
        <p className='p-3'>Recently Viewed</p>

        <Slider {...settings}>
        {selectedCards.map((selectedCardId) => {
                  const selectedCard = data.find(card => card.id === selectedCardId);
                  return (
                    <div className="col m-3 p-3" key={selectedCardId}>
                      {/* cards */}
                      <div 
                        className="card border border-warning shadow p-3 mb-5 bg-body rounded"
                        style={{ width: '15rem', height: "22rem"}}
                        id='product-card'
                      >
                        <img src={selectedCard.image_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <p className="card-text">{selectedCard.brand}</p>
                          <p className="card-title">{selectedCard.name}</p>
                          <p className="card-text">Ksh: {selectedCard.price}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
        </Slider>
        </div>
        
      </div>

       {/* products rendering  */}

        
       <div className='container'>
        <div className='container  w-100 '>
          {/* <h1 className='bg-warning rounded-top p-2'>Recently Viewed</h1> */}
            <div className='container' >
              <div className="d-flex flex-wrap">              
                {data && data.map((d) => (
                  <div className="col" key={d.id}>
                    {/* cards */}
                    <div 
                    onClick={() => handleCardClick(d.id)}
                    className="card border border-warning shadow p-3 mb-5 bg-body rounded "
                    style={{ width: '15rem', height: "22rem"}}
                    id='product-card'
                    >
                    {/* <img src={backgroundImg} className="card-img-top" alt="..." /> */}
                      <img src={d.image_url} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text">{d.brand}</p>
                        <p className="card-title">{d.name}</p>
                        
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
};

export default Cards;
