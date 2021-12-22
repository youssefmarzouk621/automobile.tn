import React from 'react'


function News() {


    return (
        <div className="home-news-carousel-widget">
            <div className="big-news-carousel owl-carousel">

            <a href="#">
            <img className="cdn-image owl-lazy" alt="Le KIA EV6 élu « CROSSOVER DE L’ANNÉE » LORS DES TOPGEAR.COM AWARDS 2021" data-src="https://news.automobile.tn/2021/12/kia-ev6-1876_max_home.jpg?t=1639575554"/>
                    <div className="carousel-box-container content-container">
                        <div className="carousel-title tl">
                            <span className="carousel-category">Actu</span>
                            <h2>KIA EV6 <span className="carousel-sub-title">Le véhicule électrique élu « Crossover de
                                    l’année » lors des Topgear.com Awards 2021</span></h2>
                        </div>
                    </div>
                </a>
                <a
                    href="#">
                    <img className="cdn-image owl-lazy"
                            alt="Max Verstappen remporte le championnat du monde de Formule 1 avec Honda"
                            data-src="https://news.automobile.tn/2021/12/championnat-du-monde-de-f1-1875_max_home.jpg?t=1639564911"/>
                    <div className="carousel-box-container content-container">
                        <div className="carousel-title tr">
                            <span className="carousel-category">Sport Auto</span>
                            <h2>Championnat du monde de F1<span className="carousel-sub-title">Max Verstappen remporte le
                                    championnat avec Honda</span></h2>
                        </div>
                    </div>
                </a>


            </div>
        </div>
    )
}

export default News
