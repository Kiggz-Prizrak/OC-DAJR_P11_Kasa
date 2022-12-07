import "../styles/logement.css";

import Slideshow from "../components/Slideshow";
import Dropdown from "../components/Dropdown";
import Tag from "../components/Tag";
import Rating from "../components/Rating";

import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

export default function Logement(logementData) {
  
  const { id } = useParams();
  const [logement, setLogement] = useState({});

  useEffect(() => {
    const fetchDate = async () => {
      const res = await fetch("http://127.0.0.1:5173/logement.json");
      const json = await res.json();
      const data = json.filter((e) => e.id == id);
      document.title = `Kasa - ${data[0].title}`;
      setLogement(data[0]);
    };
    fetchDate();
  }, []);

 //console.log(logement)
  
  return (
     
    <div className="logementContainer">
      
      <Slideshow gallery={logement.pictures} />
      <div>
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tagSection">
            <Tag tags={logement.tags} />  
          </div>
        </div>
        <div>
          <div>
            <h3></h3>
            <img src="" alt="" />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div>
        <Dropdown title={"Équipements"} content={logement.equipments} />
        <Dropdown title={"Description"} content={logement.description} />
      </div>
    </div>
  );
}
