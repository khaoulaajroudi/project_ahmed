import React from "react";
import "./TripStyle.css";
import TripData from "./TripData";
import { useDispatch, useSelector } from "react-redux";
import { addservice, getservice } from "../JS/serviceSlice.js/serviceSlice";
import { useState } from "react";
import { useEffect } from "react";

const Trip = () => {
  const dispatch = useDispatch();
  const service = useSelector((store) => store.service?.service);
  const [ping, setping] = useState(false);
  const [addform, setaddform] = useState(false);
  useEffect(() => {
    dispatch(getservice());
  }, [ping]);
  console.log(service);

  const [newservice, setnewservice] = useState({
    name: "",
    destination: "",
    details: "",
    image: "",
  });
  return (
    <div className="trip">
      <button onClick={() => setaddform(!addform)}>Add new Trip</button>
      {addform ? (
        <>
          <input
            type="text"
            placeholder="name"
            onChange={(e) =>
              setnewservice({ ...newservice, name: e.target.value })
            }
          ></input>
          <input
            type="text"
            placeholder="destination"
            onChange={(e) =>
              setnewservice({ ...newservice, destination: e.target.value })
            }
          ></input>
          <input
            type="text"
            placeholder="details"
            onChange={(e) =>
              setnewservice({ ...newservice, details: e.target.value })
            }
          ></input>
          <input
            type="text"
            placeholder="image"
            onChange={(e) =>
              setnewservice({ ...newservice, image: e.target.value })
            }
          ></input>
          <button
            onClick={() =>(dispatch(addservice(newservice),setping(!ping)))
            }
          >
            OK
          </button>
        </>
      ) : null}
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
     
      <div className="tripcard"> 
      {service?.map((e)=>(
        <TripData
        destination={e?.destination}
          image={e?.image}
          name={e?.name}
          text={e?.details}
          id={e?._id}
        />
        ))}
      </div>
      
    </div>
  );
};

export default Trip;
