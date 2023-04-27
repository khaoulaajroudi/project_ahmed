import React from 'react'
import DestinationData from './DestinationData'
import './DestinationStyle.css'


const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
       
        <DestinationData
        className="One"
        heading="Palawan Island"
        text="Palawan is an island in the Sulu Sea located west-southwest of the Philippines. It is the main island of the province of Palawan. Very elongated, the island is oriented southwest northeast over 450 km for an average width of 50 km."
        img1="./Images/One.jpg"
        img2="./Images/Two.jpg"
        />

<DestinationData
className="One-rare"
        heading="Lacs de Plitvice"
        text="Plitviče Lakes National Park is a 295 km² forest reserve in central Croatia. It is known for its chain of 16 terraced lakes, linked by waterfalls, which extend into a limestone canyon. Boardwalks and hiking trails meander around and over the water, and an electric boat connects the upper 12 lakes and the lower 4 lakes. These constitute the site of Veliki Slap, a 78 m high waterfall."
        img1="./Images/Three.jpg"
        img2="./Images/Four.jpg"
        />
    </div>
   
  )
}

export default Destination