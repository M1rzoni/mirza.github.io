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
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Your E-mail"></input>
                <textarea name="message" rows={5} placeholder="Your message"></textarea>
             </div>
        </div>
    </section> 
    )
}

export default Contact;