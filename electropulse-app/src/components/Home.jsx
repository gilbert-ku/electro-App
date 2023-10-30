import React from 'react';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Image from '../assets/image/background.jpeg';
import Cards from './home_comp/Cards';
import Brand from './home_comp/Brand';
import CartBuy from './home_comp/CartBuy';

const Home = () => {

    return (

        <>
            {/*  */}
            <Navbar />


            {/* home - body */}
            <section className="home-page">
                <div className='hero'>
                    <div className='hero-img'>
                        <img src={Image} alt='' id='hero-img' />
                    </div>
                    {/* <div className="container title" id='hero-text'>
                        <h1 className="f-s-1 text-center opacity-100 ">Electro<span className="text-white">Pulse</span></h1>

                    </div> */}
                    <div className="hero-links text-center mt-4">
                        <a href="/sell" className="btn btn-primary btn-lg me-2">Sell on ElectroPulse</a>
                        <a href="/help" className="btn btn-secondary btn-lg">Help Center</a>
                    </div>
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

            <Newsletter />
            <Footer />
        </>
    )
}
export default Home;