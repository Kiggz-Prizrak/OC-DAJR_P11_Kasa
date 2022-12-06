import "../styles/dropdown.css";

import React, { useState, useEffect } from "react";

export default function Dropdown(title, content) {
 //console.log({ title });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdownContainer">
      <div className="dropdownHeader">
        <h3>{title.title}</h3>
        <button
          style={
            isOpen
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fa-sharp fa-solid fa-chevron-down"></i>
        </button>
      </div>
      {isOpen && (
        <div className="dropdownContent">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
      )}
    </div>
  );
}
