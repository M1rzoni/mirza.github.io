import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";


function App(){

    return (
    <div>
        <NavBar />
        <Home />
        <About 
            alt = "html"
            src = "https://cdn-icons-png.flaticon.com/128/1157/1157109.png"
            text = "Front-end"
            pText = "HTML, CSS, JavaScript, Bootstrap, Tailwind"
        />
        <Projects />
    </div>
    )
}


export default App;