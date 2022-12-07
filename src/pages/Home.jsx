import "../styles/home.css";
import Card from "../components/Card";

import React, { useState, useEffect } from "react";

export default function Home() {

  const [logements, setLogements] = useState([]);

    useEffect(() => {
      const fetchDate = async ()=> {
        const res = await fetch("http://127.0.0.1:5173/logement.json");
        const json = await res.json();
        setLogements(json)
      }
      fetchDate()
    }, [logements]);

  return (
    <div className="homeContainer">
      <div
        className="homeTitle"
      >
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <ul className="cardContainer">
        {logements.map((logement) => (
          <Card key={logement.id} data={logement} />
        ))}
      </ul>
    </div>
  );
}
