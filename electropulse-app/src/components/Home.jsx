import React from 'react';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Image from '../assets/image/background.jpeg';
import Cards from './home_comp/Cards';
import Brand from './home_comp/Brand';
import CartBuy from './home_comp/CartBuy';
import {FaWallet, FaQuestionCircle} from 'react-icons/fa';

const Home = () => {

    return (

        <>
            {/*  */}
            <Navbar />


            {/* home - body */}
            <section className="home-page">
                <div className='hero d-flex justify-content-around'>
                    <div className='hero-img text-center'>
                        <img src={Image} alt='' id='hero-img' />
                    </div>
                   
                    <div className="hero-links text-center mt-1.5 bg-light">
                        <div className="d-flex flex-column  links">
                            <a id='links-a' href="/sell" className="btn btn-warning  mb-2"><FaWallet/> Sell on ElectroPulse</a>
                            <a id='links-b' href="/help" className="btn btn-outline-secondary "><FaQuestionCircle/> Help Center</a>
                        </div>
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