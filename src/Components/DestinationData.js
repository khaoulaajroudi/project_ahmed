import React from 'react'
import './DestinationStyle.css'

const DestinationData = (props) => {
  return (
    <div className={props.className}>
    <div className='Two'>
<h2>{props.heading}</h2>
<p>{props.text}</p>
    </div>
    <div className='Image'>
        <img alt='No' src={props.img1}/>
        <img alt='No' src={props.img2}/>
    </div>
</div>
  )
}

export default DestinationData