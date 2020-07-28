import React from "react";
import Logo from "../../assets/img/logo.png";
import "./styles.css";
// import ButtonLink from "./components/ButtonLink";'
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} class="Logo" alt="Logo da Aplicação" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
