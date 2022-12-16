import "../styles/errorPage.css"
import { Link } from "react-router-dom";

export default function ErrorMessage() {
  return(
  <div className="ErrorContainer" id="error-page">
    <h1>404</h1>
    <p>Oups! La page que vous demandez n'existe pas.</p>

    <Link to="/">Retournez sur la page d'accueil</Link>
  </div>)
}