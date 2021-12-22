import React, { useState,useEffect } from 'react'
import axios from 'axios'


function Brands() {
    const [brands,Setbrands] = useState([]);

    useEffect( () => {
      const fetchVoitures = async () =>{
        const res = await axios.get('api/brands/');
        Setbrands(res.data);
     }
     fetchVoitures()
  
  
  }, [])

    return (
        <div className="brands-list-widget">
            <div className="container">

                <div className="bloc-title">
                    <h3>Showroom auto <span>Toutes les marques automobiles</span></h3>
                </div>


                {brands.map((brand) => (
                    <a key={brand._id} href="#">
                        <img src={"uploads/marques/"+brand.image} alt={brand.name} />
                    </a>
                ))}
                



                <div className="display-all-container">
                    <a href="#" className="btn btn-primary">
                        Toutes les marques </a>
                </div> 

            </div>
        </div>
    )
}

export default Brands
