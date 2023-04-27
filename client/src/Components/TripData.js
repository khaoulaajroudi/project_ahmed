import React from 'react'
import "./TripStyle.css";
import { useDispatch } from 'react-redux';
import { deleteservice, updateservice } from '../JS/serviceSlice.js/serviceSlice';
import { useState } from 'react';

const TripData = (props) => {
  const dispatch = useDispatch();
  const [editservice, seteditservice] = useState({
    name: props?.name,
    image: props?.image,
    destination:props?.destination,
    details: props?.text
  });
  const [show, setshow] = useState(false)
  return (
    <div className='t-card'>
      <button onClick={()=>dispatch(deleteservice(props.id))}>X</button>
      <button style={{marginLeft:"140px"}} onClick={()=>setshow(true)}>Editer</button>

{show? 
<>
<input placeholder={props.name} onChange={(e)=>seteditservice({...editservice,name:e.target.value})}></input>
<input placeholder={props.destination} onChange={(e)=>seteditservice({...editservice,destination:e.target.value})}></input>

      <button onClick={()=>dispatch(updateservice({id:props.id,service:editservice}))}>Valider</button>
      </>
    :null}
        <div className='t-image'>
          <h2 style={{marginLeft:"80px", fontWeight: "900"}}>{props.name}</h2>
            <img alt='fam shy' src={props.image}/>
        </div>
        <h4>{props.destination}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default TripData