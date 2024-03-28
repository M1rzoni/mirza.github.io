import React from "react";
import movieImage from "../icons/movie.png";
import todo from "../icons/todo.png";
import weather from "../icons/weather.png";
import "./style/Projects.css";

function Projects() {
  return (
    <section>
      <div id="projects" className="projects-div-main-container">
        <div className="project-content">
          <h1 className="title">Projects</h1>
          <div className="content-projects">
            <div className="projects">
              <div className="img-container-projects">
                <img
                  className="projects-icons"
                  alt="todo-app"
                  src={weather}
                ></img>
              </div>
              <div className="languages">
                <a href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a>
                <a href="https://en.wikipedia.org/wiki/React_(software)">React + Vite</a>
                <a href="https://en.wikipedia.org/wiki/HTML">Html</a>
                <a href="https://en.wikipedia.org/wiki/CSS">Css</a>
                <a href="https://en.wikipedia.org/wiki/API">API</a>
              </div>
              <div className="title-text-projects">
                <h1>Weather App</h1>
                <p>
                  Weather application that displays current conditions and
                  forecast for the requested city.
                </p>
                <a href="https://github.com/M1rzoni/WeatherApp">
                  <button className="button-6 btn-width">Code</button>
                </a>
              </div>
            </div>

            <div className="projects">
              <div className="img-container-projects">
                <img className="projects-icons" alt="todo-app" src={todo} />
              </div>
              <div className="languages">
                <a href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a>
                <a href="https://en.wikipedia.org/wiki/React_(software)">React + Vite</a>
                <a href="https://en.wikipedia.org/wiki/HTML">Html</a>
                <a href="https://en.wikipedia.org/wiki/CSS">Css</a>
              </div>
              <div className="title-text-projects">
                <h1>Todo App</h1>
                <p>
                  A to-do application for task management that allows users to
                  create, edit, and delete task lists.
                </p>
                <a href="https://github.com/M1rzoni/TodoAplication">
                  <button className="button-6 btn-width">Code</button>
                </a>
              </div>
            </div>
            <div className="projects">
              <div className="img-container-projects">
                <img
                  className="projects-icons"
                  alt="todo-app"
                  src={movieImage}
                />
              </div>
              <div className="languages">
                <a href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a>
                <a href="https://en.wikipedia.org/wiki/React_(software)">React + Vite</a>
                <a href="https://en.wikipedia.org/wiki/HTML">Html</a>
                <a href="https://en.wikipedia.org/wiki/CSS">Css</a>
                <a href="https://en.wikipedia.org/wiki/API">API</a>
              </div>
              <div className="title-text-projects">
                <h1>Movie App</h1>
                <p>
                  A movie application that enables searching for the desired
                  movie.
                </p>
                <a href="https://github.com/M1rzoni/MovieApp">
                  <button className="button-6 btn-width">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
