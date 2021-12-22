import React, { useState,useEffect } from 'react'
import Voiture  from './../voiture/Voiture';
import axios from 'axios'

function Prices() {
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
        <div id="super_content_container">
            <div id="bandeau_container">
                <div id="bandeau">
                    <div className="ban">
                        <div className="rv rv-2" data-zoneid="2"></div>
                    </div>
                </div>
            </div>
            <div className="content-container" id="content_container">




                <div className="clearer"></div>

                <div className="latest-versions-widget carousel">
                    <div className="bloc-title">
                        <h3>Prix du neuf <span>Derniers modèles</span></h3>
                    </div>
                    <div className="owl-carousel items">


                    {voitures.map((v) => (
                        <Voiture key={v._id} voiture={v} />
                    ))}


                    </div>
                </div>



                <div className="clearer"></div>
            </div>
        </div>
    )
}

export default Prices
