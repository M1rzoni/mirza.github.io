import React from "react";

function About(props){

     const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            
            if(entry.isIntersecting){
                entry.target.classList.add('show')
            }else{
                entry.target.classList.remove('show')
            }
        })
     })

     const hiddenElements = document.querySelectorAll('.hidden');
     hiddenElements.forEach((el) => observer.observe(el));



    return (
    <div id="about" className="about-container">          
        <div className="about-main-container">
              <div>
                <h1>About me</h1>
                <p>I am Mirza, a full-stack programmer with expertise covering web application development. <br /> 
                Throughout my work, I strive to create high-quality applications that are user-centric. Additionally, <br />
                I regularly keep up with the latest trends and technologies.</p>
              </div>
        </div>
              <div>
              
                 <div className="flex-about-container">
                   <div className="flex">
                    <img alt={props.alt} src={props.src}></img>
                    <div className="content">
                      <h1>{props.text}</h1>
                      <p>{props.pText}</p>
                    </div>
                     </div>
                 </div>

                 <div className="flex-about-container hidden">
                   <div className="flex">
                    <img alt= "back-end-icon" src="https://cdn-icons-png.flaticon.com/128/13191/13191307.png"></img>
                    <div className="content">
                      <h1>Back-end</h1>
                      <p>Node.js, PostgreSQL, Firebase, MongoDB, Java, EJS</p>
                    </div>
                     </div>
                 </div>

                 <div className="flex-about-container hidden">
                   <div className="flex">
                    <img alt= "back-end-icon" src="https://cdn-icons-png.flaticon.com/128/3344/3344281.png"></img>
                    <div className="content">
                      <h1>Framework</h1>
                      <p>React.js, jQuery, Exspress.js</p>
                    </div>
                     </div>
                 </div>

                 <div className="flex-about-container hidden">
                   <div className="flex">
                    <img alt= "back-end-icon" src="https://cdn-icons-png.flaticon.com/128/1055/1055683.png"></img>
                    <div className="content">
                      <h1>Development Skills and Tools</h1>
                      <p>Git, GitHub, Linux</p>
                    </div>
                     </div>
                 </div>
              </div>
            
    </div>  
    )
}


export default About;