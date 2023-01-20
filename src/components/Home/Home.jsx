import React from "react";
import { Link } from "react-router-dom";
import iconGithub from "../../assets/github.svg";
import background from "../../assets/Rectangle.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div>
        <img src={background} width="100%"></img>
      </div>
      <div className="title">
        <h1>
          Crea tu <span>README</span> en pocos minutos
        </h1>
        <h3>
          Este sencillo editor te permitirá obtener el README para tu proyecto
          de forma rápida y sencilla
        </h3>
        <Link to="/editor" className="home__button">
          Comencemos!
        </Link>
      </div>

      <div></div>
      <div>
        <h2>
          Creado con &hearts; por
          <a href="https://natalia.net.ar/"> Natalia Machella</a>
        </h2>
        <a src="https://github.com/nataliamachella">
          <img src={iconGithub} />
        </a>
      </div>
    </div>
  );
};

export default Home;
