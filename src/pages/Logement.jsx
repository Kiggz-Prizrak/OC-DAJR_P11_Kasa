import "../styles/logement.css"
import Slideshow from "../components/Slideshow"
import Dropdown from "../components/Dropdown"
import Tag from "../components/Tag"

import { useParams } from "react-router-dom";



export default function Logement(logementData) {

  const { id } = useParams();
  console.log(id)




  return (
    <div className="logementContainer">

    </div>
  )
}