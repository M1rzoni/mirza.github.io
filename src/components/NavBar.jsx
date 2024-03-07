import React, { useEffect, useState } from "react";


function NavBar() {

    const [isScrolled, setIsScrolled] = useState();

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                setIsScrolled(true);
            }else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

 const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element){
        window.scrollTo({
            behavior: "smooth",
            block: element.offsetTop
        });
    }
 }

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="div-navbar-container">
                 <div className="h1-div">
                    <h1>Portfolio</h1>
                 </div>
             <div className="links-container">
                 <a href="#home"  onClick={() => scrollTo('home')}>Home</a>
                 <a href="#about" onClick={() => scrollTo('about')}>About</a>
                 <a href="#projects" onClick={() => scrollTo ('projects')}>Projects</a>
                 <a href="#contact" onClick={() => scrollTo ('contact')}>Contact</a>
             </div>
            </div>
        </nav>
    )
}


export default NavBar;