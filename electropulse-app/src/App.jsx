// import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../src/components/Home'
import Login from '../src/components/login';
import Signup from '../src/components/signup';
import './App.css'

const App = () => {

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>

  )
}

export default App
