import React from 'react';
import { Parallax } from 'react-parallax';

const Rooms=()=>{
    return(
        <div id="rooms">
        <div className="parallax-container">
            <Parallax 
            className="image1"
            strength={500} 
            bgImage={"/room.jpeg"} bgImageAlt="image" style={{height:'800px'}}>

            <div className="room-card">
                <div className="card-head">Our Rooms</div>
                <div className="card-content">
                    I'm a paragraph.
                    Click here to add your own text and edit me.
                    I’m a great place for you to tell a story and let your users know a little more about you.</div>
                <button className="card-button">Book A Room</button>
            </div>
            </Parallax>
            </div>
            </div>
    )
}

export default Rooms;