import React from "react";
import logoImg from "../../assets/images/logo.png";
import "./styles.css";

//componentes em classes herda a classe componente em react, e retorna HTML dentro do metodo render

//componente funcional e uma funcao que retorna HTML
export function Navbar() {
  return (
    <header>
      <nav id="navbar">
        <div className="nav-brand">
          <img src={logoImg} alt="Logo"></img>
          <h1>Lado Sul</h1>
        </div>

        <div>
          <ul className="nav-list">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Tendencias</a>
            </li>
            <li>
              <a href="/">Categorias</a>
            </li>
            <li>
              <a href="/">Sobre nos</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
