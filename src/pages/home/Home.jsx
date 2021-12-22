//import Voitures from '../../components/voitures/Voitures';
import News from '../../components/News/News';
import React from 'react'
import Prices from '../../components/Prices/Prices';
import Brands from '../../components/Brands/Brands';
function Home() {
    return (
        <div className="content-wrapper" >
            {/* <Voitures /> */}
            <News />
            <Prices/>
            <Brands/>

        </div>
    )
}

export default Home
