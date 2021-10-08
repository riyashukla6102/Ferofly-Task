import React from 'react';
import{Parallax} from 'react-parallax';

const Home=()=>{
    return(
        <div id="home">
            <div className="home-title">Ferofly</div>
            <div className="home-subtitle">Magnify your Journey</div>
            <div className="parallax-container">
            <Parallax 
            className="image1"
            strength={600} 
            bgImage={"/home.JPG"} bgImageAlt="image">
            </Parallax>
            </div>

            <div className="date-container">
            <div className="datecontent">Check In
                <input type="date"></input>
            </div>

            <div className="datecontent">Check Out
                <input type="date"></input>
            </div>

            <div className="numbercontent">Adults
                <input type="number"></input>
            </div>

            <div className="numbercontent">Kids
                <input type="number"></input>
            </div>

            <button className="button-home">Search</button>
            </div>

        </div>
    )
}

export default Home;