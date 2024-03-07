import React from "react";

function Projects(){
    return (
      <section> 
        <div id="projects" className="projects-div-main-container" >
            <div className="project-content">
                <h1 className="title">Projects</h1>
                   <div className="content-projects">
                    <div className="projects">
                       <img alt="todo-app" src="https://www.freecodecamp.org/news/content/images/2020/07/cover-1.png"></img>
                       <h1>TODO APP</h1>
                       <p>some random text</p>
                       <button className="button-6 new-size-btn">Show more</button>
                     </div>

                     <div className="projects">
                       <img alt="todo-app" src="https://www.freecodecamp.org/news/content/images/2020/07/cover-1.png"></img>
                       <h1>TODO APP</h1>
                       <p>some random text</p>
                       <button className="button-6">Show more</button>
                     </div>
                     <div className="projects">
                       <img alt="todo-app" src="https://www.freecodecamp.org/news/content/images/2020/07/cover-1.png"></img>
                       <h1>TODO APP</h1>
                       <p>some random text</p>
                       <button className="button-6">Show more</button>
                     </div>
                   </div>
                   
                   
            </div>
        </div>
    </section> 
    )
}

export default Projects;