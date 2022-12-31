import React from 'react'
import "./TripStyle.css";
import TripData from "./TripData"

const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className='tripcard'>
            <TripData
            image="./Images/indonesia.jpg"
            heading="Trip In Indonesia"
            text="Indonesia, a Southeast Asian country made up of thousands of volcanic islands, is home to hundreds of ethnic groups speaking their own languages. It is known for its beaches, volcanoes, Komodo dragons and jungles where elephants, orangutans and tigers live."
            />
            <TripData
            image="./Images/malaysia.jpg"
            heading="Trip In Malaysia"
            text="Malaysia is a country in Southeast Asia occupying part of the Malay Peninsula and the island of Borneo. It is renowned for its beaches, rainforests and Malay, Chinese, Indian and European cultural influences. Kuala Lumpur, the capital, is home to colonial buildings, shopping districts such as Bukit Bintang, and skyscrapers like the iconic 451-meter-tall Petronas Twin Towers."
            />
            <TripData
            image="./Images/suisse.jpg"
            heading="Trip In Suisse"
            text="Switzerland is a mountainous country in central Europe, home to many lakes and villages, as well as the high peaks of the Alps. The country's cities include medieval quarters and landmarks like the Zytglogge (bell tower) in Bern, the capital, and the wooden Chapel Bridge in Lucerne. The country is also renowned for its ski resorts and hiking trails. Key industries are banking and finance, and Swiss watches and chocolate are world famous."
            />
        </div>
    </div>
  )
}

export default Trip