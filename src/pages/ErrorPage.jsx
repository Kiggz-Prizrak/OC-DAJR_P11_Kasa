import { useRouteError, Link } from "react-router-dom";
import '../styles/errorPage.css'
import Header from "../components/Header"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    
    <div className="ErrorContainer" id="error-page">

    

      <div className="errorMessage">
        <h1>Oups! La page que vous demandez n'existe pas</h1>
        <p className="httpError">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Link to={"lien"}>Retournez sur la page d'accueil</Link>
    </div>
  );
}
