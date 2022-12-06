import "../styles/card.css";
import { Link } from "react-router-dom";

export default function Card({ data }) {


  
  const img = data.cover;

  return (
    <li key={data.id} className="card">
      <Link to={`logement/${data.id}`}>
        <img src={data.cover} alt={data.title} />
        <div className="logementTitle">
          <h3>{data.title}</h3>
        </div>
      </Link>
    </li>
  );
}
