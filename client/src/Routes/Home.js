import React from 'react'
import Destination from '../Components/Destination';
import Footer from '../Components/Footer';
import Jack from '../Components/Jack';
import Navbar from '../Components/Navbar'
import Trip from '../Components/Trip';
const Home = () => {
  return (
    <div>
      <Navbar/>
        <Jack 
        cName='Jack'
        JackImg='./Images/Car.jpg'
        title='Your Journey Your Story'
        text='Choose Your Favorite Destination'
        buttonText='Travel Plan'
        url='/'
        bntClass='show'
        />
        <Destination/>
        <Trip/>
        <Footer/>
    </div>
  )
}

export default Home;