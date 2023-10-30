import React from 'react';
import Cards from './home_comp/Cards';
import Brand from './home_comp/Brand';
import CartBuy from './home_comp/CartBuy';
import Navbar from './Navbar';


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

        </>
    )
}
export default Home;