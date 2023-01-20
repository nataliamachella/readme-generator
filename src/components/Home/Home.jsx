import React from "react";
import { Link } from "react-router-dom";
import iconGithub from "../../assets/github-w.svg";
import background from "../../assets/Rectangle.svg";
import screenshot from "../../assets/README-generator.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div>
        <img src={background} width="100%"></img>
      </div>
      <div className="container">
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

        <div className="screenshot">
          <img src={screenshot} />
        </div>
      </div>

      <footer className="footer">
        <h4>
          Creado con &hearts; por
          <a href="https://natalia.net.ar/" className="footer__name">
            {" "}
            Natalia Machella
          </a>
        </h4>
        <a src="https://github.com/nataliamachella">
          <img src={iconGithub} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
