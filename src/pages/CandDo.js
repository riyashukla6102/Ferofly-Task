import React from 'react';
import { Parallax } from 'react-parallax';

const CandDo=()=>{
    return(
        <div id="thingstodo">
        <div className="todo-heading">Things to do</div>
        <div className="todo-row">
        <div className="todo-item">
            <div className="todo-head">Wineries Tour</div>
            <div className="todo-para">I'm a paragraph. Click here to add your own text and edit me.</div>
        </div>

        <div className="todo-item">
            <div className="todo-head">Cultural Sites</div>
            <div className="todo-para">I'm a paragraph. Click here to add your own text and edit me.</div>
        </div>

        <div className="todo-item">
            <div className="todo-head">Market Tour</div>
            <div className="todo-para">I'm a paragraph. Click here to add your own text and edit me.</div>
        </div>
        </div>

        <div className="todo-row">
        <div className="todo-item">
            <div className="todo-head">Leisure Activities</div>
            <div className="todo-para">I'm a paragraph. Click here to add your own text and edit me.</div>
        </div>

        <div className="todo-item">
            <div className="todo-head">Birds Safari</div>
            <div className="todo-para">I'm a paragraph. Click here to add your own text and edit me.</div>
        </div>

        <div className="todo-item">
            <div className="todo-head">Horse Riding</div>
            <div className="todo-para">I'm a paragraph. Click here to add your own text and edit me.</div>
        </div>
        </div>

        <div className="parallax-container">
            <Parallax 
            className="image1"
            strength={500} 
            bgImage={"/card1.jpg"} bgImageAlt="image" style={{height:'800px'}}>

            <div className="room-card">
                <div className="card-head">GUEST REVIEW</div>
                <img src="/logo4.png" style={{marginTop:20}}/>
                <div className="card-content">
                “I'm a paragraph. Click here to add your own text and edit me.”</div>
               
            </div>
            </Parallax>
            </div>
        
        </div>
    )
}
export default CandDo;