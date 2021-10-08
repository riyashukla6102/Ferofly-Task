import React from 'react';

const Contactus=()=>{
    return(
        <div id="contactus">
            <div className="contact-head">Contact us</div>
            <div className="contact-items">
                <div>info@mysite.com</div>
                <div>/</div>
                <div>200 Terry Fracois Street, San Francisco, CA 94158</div>
                <div>/</div>
                <div>Tel: 123-456-7890</div>
            </div>
            <form id="contactform">
            <div className="formitems1">
                <input type="text" placeholder="Name*"></input>
                <input type="email" placeholder="Email*"></input>
            </div>
            <div className="formitems">
                <input type="text" placeholder="Subject"></input>
            </div>
            <div className="formitems">
                <textarea placeholder="Message"></textarea>
            </div>
            <div>
                <button className="send-button">Send</button>
            </div>
            </form>

            <div className="map">
            <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>
    )
}
export default Contactus;