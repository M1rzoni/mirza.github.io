import React from "react";


function Contact(){
    return (
    <section id="contact" className="contact-container">
        <div className="main-contact-container">
          <div className="title-container">
            <h1>Contact</h1>
            <p>Feel free to fill out the form below</p>
          </div>
             <div className="contact-content">
                <input className="myName" type="text" placeholder="Name" />
                <input className="email" type="email" placeholder="Email"></input>
                <textarea className="msg" name="message" rows={5} placeholder="Your message"></textarea>
                <button className="btn-submit">Submit</button>
                 <div className="img-container"> 
                <a href="https://www.youtube.com/" rel="noreferrer" target="_blank"><img  alt="instagram" src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"></img></a>
                <a href="https://github.com/M1rzoni" rel="noreferrer" target="_blank"><img alt="github" src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png"></img></a>
                <a href="https://www.youtube.com/" rel="noreferrer" target="_blank"><img alt="linkdin" src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png"></img></a>
                 </div>
             </div>
        </div>
    </section> 
    )
}

export default Contact;