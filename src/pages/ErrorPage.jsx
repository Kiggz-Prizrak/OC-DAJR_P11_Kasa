import { useRouteError, Link } from "react-router-dom";
import "../styles/errorPage.css";
import Header from "../components/Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="ErrorContainer" id="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>

      <Link to="/">Retournez sur la page d'accueil</Link>
    </div>
  );
}
