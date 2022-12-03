import { NavLink } from "react-router-dom";

import "../styles/header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <img src="http://127.0.0.1:5173/Kasa_logo.jpg" alt="Logo de Kasa" />
      <nav>
        <NavLink to="/">Accueil</NavLink>

        <NavLink to="/about">À propos</NavLink>
      </nav>
    </div>
  );
}
