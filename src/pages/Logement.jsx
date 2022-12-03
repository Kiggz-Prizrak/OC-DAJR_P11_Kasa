import "../styles/logement.css"
import Slideshow from "../components/Slideshow"
import Dropdown from "../components/Dropdown"
import Tag from "../components/Tag"

import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";



export default function Logement(logementData) {

  const { id } = useParams();
  console.log(id)
  
  const gallery = []

  const [logement, setLogement] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {
      const res = await fetch("http://127.0.0.1:5173/logement.json");
      const json = await res.json();
      const data = json.filter((e) => e.id == id)
      console.log(data);
      setLogement(data);
    };
    fetchDate();
  }, []);



  return (
    <div className="logementContainer">
      <Slideshow gallery={gallery} />
    </div>
  )
}