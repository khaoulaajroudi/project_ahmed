import React from 'react'
import './JackStyle.css';

const Jack = (props) => {
  return (
    <div className={props.cName}>
        <img alt='JackImg' src={props.JackImg}/>
        <div className='Jack-Text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.bntClass}>
           {props.buttonText}
        </a>
        </div>
    </div>

    
  )
}

export default Jack