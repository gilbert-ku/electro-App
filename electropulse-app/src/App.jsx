// import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../src/components/Home'
import Login from '../src/components/login';
import Signup from '../src/components/signup';
import Footer from '../src/components/Footer';
import Newsletter from '../src/components/Newsletter';



import './App.css'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/Navbar" element={<Navbar/>} /> */}
        {/* <Route path="/Footer" element={<Footer/>} /> */}
      </Routes>
      <Newsletter/>
      <Footer/>
    </div>

  )
}

export default App