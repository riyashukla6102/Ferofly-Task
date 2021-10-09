import React from 'react';
import {NavHashLink} from 'react-router-hash-link';

const Navbar=()=>{
    return(
        <div className="Navbar">
            <NavHashLink smooth exact={true} activeClassName='is-active' to="#home">Home</NavHashLink>
            <NavHashLink smooth exact={true} activeClassName='is-active' to="#about">About</NavHashLink>
            <NavHashLink smooth exact={true} activeClassName='is-active' to="#rooms">Rooms</NavHashLink>
            <NavHashLink smooth exact={true} activeClassName='is-active' to="#services">Services</NavHashLink>
            <NavHashLink smooth exact={true} activeClassName='is-active' to="#gallery">Gallery</NavHashLink>
            <NavHashLink smooth exact={true} activeClassName='is-active' to="#thingstodo">See & Do</NavHashLink>
            <NavHashLink smooth exact={true} activeClassName='is-active' to="#contactus">Contact</NavHashLink>
            <button>Book A Room</button>
            
        </div>
    )
}

export default Navbar;