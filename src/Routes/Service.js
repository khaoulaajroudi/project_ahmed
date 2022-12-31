import React from 'react'
import Footer from '../Components/Footer';
import Jack from '../Components/Jack';
import Navbar from '../Components/Navbar';
import Trip from '../Components/Trip';

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