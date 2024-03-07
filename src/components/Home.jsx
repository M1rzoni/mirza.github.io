import React from "react";


function Home(){

    return (
         <div  id="home" className="home-container">

          <div className="home-content-container">
            <h1>Hello, <br /> my name is <span className="name">Mirza Šabanović</span></h1>
            <p>I'm a Full-Stack developer from Bosnia 👋</p>
            <a href={require("../files/Mirza_CV.pdf")} download="MirzaCV">
            <button className="button-6">Dowload CV</button>
            </a>
          </div>
            <div className="icon-container">
                <img alt="myPhoto" src="https://avatars.githubusercontent.com/u/113027159?s=400&u=da13b18aec7ae552f6796b5e2387335ce24707ff&v=4"></img>
            </div>
         </div>
    )
}

export default Home;