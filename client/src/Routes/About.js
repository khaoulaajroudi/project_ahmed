import React from 'react'
import AboutUs from '../Components/AboutUs';
import Footer from '../Components/Footer';
import Jack from '../Components/Jack';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
    <div>
<Navbar/>
        <Jack 
        cName='Jack-ya'
        JackImg='./Images/Night.jpg'
        title='About'
        bntClass='hide'
        />
        <AboutUs/>
            <Footer/>
    </div>
  )
}

export default About;