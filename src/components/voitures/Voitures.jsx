import React, { useState,useEffect } from 'react'
import './voitures.css'
import Voiture  from './../voiture/Voiture';
import axios from 'axios'

function Voitures() {

  const [voitures,Setvoitures] = useState([]);

  useEffect( () => {
    const fetchVoitures = async () =>{
      const res = await axios.get('api/cars/');
      Setvoitures(res.data);
      console.log(res.data)
   }
   fetchVoitures()


}, [])

  
  return (
    <div className="voitures">
      {voitures.map((v) => (
        <Voiture key={v._id} voiture={v} />
      ))}
    </div>
  );
}

export default Voitures
