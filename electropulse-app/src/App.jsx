import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import Login from '../src/components/Login';
import Signup from '../src/components/Signup';
import AboutUs from '../src/components/AboutUs';
import ContactUs from '../src/components/ContactUs';
import HelpCentre from '../src/components/HelpCentre';
import SellOn from '../src/components/SellOn';
import Payment from './components/home_comp/Payment';
//import Navigation from '../src/components/Navigation';

import './App.css';

const App = () => {
  return (
    <div>
      {/* /*<Navigation /> */} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/help-centre" element={<HelpCentre />} />
        <Route path="sell-on-electropulse" element={<SellOn/>}/>
        <Route path="payment" element={<Payment/>} />
      </Routes>
    </div>
  );
}

export default App;
