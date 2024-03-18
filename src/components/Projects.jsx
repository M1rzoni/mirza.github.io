import React from "react";
import movieImage from "../icons/movie.png"
import todo from "../icons/todo.png"

function Projects(){
    return (
      <section> 
        <div id="projects" className="projects-div-main-container" >
            <div className="project-content">
                <h1 className="title">Projects</h1>
                   <div className="content-projects">
                    <div className="projects">
                    <div className="img-container-projects">
                      <img alt="todo-app" src="data:image/png;base64,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"></img> 
                     </div>
                      <div className="title-text-projects">
                       <h1>TODO APP</h1>
                       <p>some random text</p>
                       <button className="button-6 btn-width">Show more</button>
                       </div>
                     </div>

                     <div className="projects">
                     <div className="img-container-projects">
                        <img alt="todo-app" src={todo} />
                      </div>
                       <div className="title-text-projects">
                       <h1>TODO APP</h1>
                       <p>some random text</p>
                       <button className="button-6 btn-width">Show more</button>
                       </div>
                     </div>
                     <div className="projects">
                      <div className="img-container-projects">
                       <img alt="todo-app" src={movieImage} /> 
                       </div>
                      <div className="title-text-projects">
                       <h1>TODO APP</h1>
                       <p>some random text</p>
                       <button className="button-6 btn-width">Show more</button>
                      </div>
                     </div>
                   </div>
                   
                   
            </div>
        </div>
    </section> 
    )
}

export default Projects;