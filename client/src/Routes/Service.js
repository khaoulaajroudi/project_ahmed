import React from 'react'
import Footer from '../Components/Footer';
import Jack from '../Components/Jack';
import Navbar from '../Components/Navbar';
import Trip from '../Components/Trip';
import { useDispatch, useSelector } from 'react-redux';
import { getservice } from '../JS/serviceSlice.js/serviceSlice';
import { useState } from 'react';
import { useEffect } from 'react';

const Service = () => {
  return (
    <div>
 <Navbar/>
        <Jack 
        cName='Jack-ya'
        JackImg='./Images/Service.jpg'
        title='Service'
        bntClass='hide'
        />
        <Trip/>
            <Footer/>
    </div>
  )
}

export default Service;