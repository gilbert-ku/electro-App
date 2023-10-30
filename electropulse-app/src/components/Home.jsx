import React from 'react';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';



// import Navbar from './Navbar'

// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://kohls.p.rapidapi.com/categories/list',
//   headers: {
//     'X-RapidAPI-Key': 'c355c9c215msh4ab47fb85d1669fp139939jsnbb46094711c3',
//     'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
//   }
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

import Cards from './home_comp/Cards';
import Brand from './home_comp/Brand';
import CartBuy from './home_comp/CartBuy';

const Home = () => {
    return (

        <>
        {/*  */}
            <Navbar />


            {/* home - body */}
            <section className="home-page opacity-100">
                <div className="container title">
                    <h1 className="f-s-1 text-center opacity-100 ">Electro<span className="text-white">Pulse</span></h1>
                    
                </div>
            </section>


            {/* brand */}
            <section>
                <Brand />
            </section>

            {/* viewed cards */}
            <section className="viewed cards">
                
            <CartBuy />
            </section>

            {/* cards */}
            <section className="cards">
                <Cards />
            </section>

            <Newsletter/>
            <Footer/>
        </>
    )
}
export default Home;