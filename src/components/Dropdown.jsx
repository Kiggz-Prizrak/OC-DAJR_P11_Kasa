import "../styles/dropdown.css";

import React, { useState, useEffect } from "react";

export default function Dropdown(props) {
 //console.log({ title });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdownContainer">
      <div className="dropdownHeader">
        <h3>{props.title}</h3>
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
          {typeof props.content == "string" ? (
            <p>{props.content}</p>
          ) : (
            <ul>
              {props.content.map((prop) => (
                <li>{prop}</li>
              ))}
            </ul>
          )}

        </div>
      )}
    </div>
  );
}
