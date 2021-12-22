import React from "react";

function Voiture({ voiture }) {

  return (
    <div className="versions-item">
      <a href="#">

        <span className="tag nouveau">{voiture.category.name}</span>

        <img src={"uploads/cars/" + voiture.image}
          alt={voiture.name} />
        <h2>{voiture.brand.name+" "+voiture.name}</h2>

        <div className="price">
          {voiture.price}
        </div>


        <div className="tag-text nouveau"></div>
      </a>
    </div>




  )
}

export default Voiture
