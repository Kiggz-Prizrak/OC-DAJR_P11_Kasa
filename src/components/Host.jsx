import "../styles/host.css";
import React, { useState, useEffect } from "react";

export default function Host(props) {
const [data, setData] = useState({});

useEffect(() => {
   if (props.host) {
     setData(props.host);
   }
}, [props.host])
  return (
    <div className="hostContainer">
      <h3>{data.name}</h3>
      <img src={data.picture} alt={data.name} />
    </div>
  );
}
