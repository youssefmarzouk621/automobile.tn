import React from "react";
import './voiture.css'

function Voiture({voiture}) {
  
  return (
    <div  className="voiture">
    <img className="voitureImg" src={"uploads/"+voiture.image} alt="voitureImg" />
    <div className="voitureInfo">
      
      <div className="voitureCats">
        <span className="voitureCat">{voiture.category.name}</span>
        
      </div>
      <span className="voitureTitle">{voiture.name}</span>
      <span>{voiture.price}</span>
      
      <hr />
      <span className="voitureDate">
        {new Date(voiture.createdAt).toDateString()}
      </span>
    </div>
    <p className="voitureDesc">{voiture.description}</p>
  </div>
  )
}

export default Voiture
