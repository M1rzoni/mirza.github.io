import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./style/Contact.css"

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_7nwqout', 'template_ekwhn2t', form.current, {
                publicKey: 'fF85o82KpevPg66HH',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  const addClass = () => {
    setIsFinished(true);
  };

  const handleButtonClick = () => {
    toggleClass();
  };

  const handleTransitionEnd = () => {
    toggleClass();
    addClass();
  };


    return (
        <section id="contact" className="contact-container">
            <div className="main-contact-container">
                <div className="title-container">
                    <h1>Contact</h1>
                    <p>Feel free to fill out the form below</p>
                </div>
                <form className="contact-content" ref={form} onSubmit={sendEmail}>
                    <input className="myName" type="text" placeholder="Name" required />
                    <input className="email" type="email" placeholder="Email" required />
                    <textarea className="msg" name="message" rows={5} placeholder="Your message" required></textarea>
                    <button class="button"
                    className={`button ${isActive ? 'active' : ''} ${isFinished ? 'finished' : ''}`}
                    onClick={handleButtonClick}
                    onTransitionEnd={handleTransitionEnd}>
  <span class="submit">Submit</span>
  <span class="loading"><i class="fa fa-refresh"></i></span>
  <span class="check"><i class="fa fa-check"></i></span>
</button>
                </form>
                <div className="img-container">
                  <div>
                    <a href="https://www.instagram.com/m.i.r.z.a_._/" rel="noreferrer" target="_blank"><img alt="instagram" src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"></img></a>
                    <a href="https://github.com/M1rzoni" rel="noreferrer" target="_blank"><img alt="github" src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png"></img></a>
                    <a href="https://www.linkedin.com/in/mirza-%C5%A1abanovic-06b557217/" rel="noreferrer" target="_blank"><img alt="linkdin" src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png"></img></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
