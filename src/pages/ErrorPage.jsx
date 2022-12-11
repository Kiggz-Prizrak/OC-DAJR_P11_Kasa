import { useRouteError, Link } from "react-router-dom";
import "../styles/errorPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ErrorPage() {
  return (
    <div className="container">
      <Header />
      <div className="ErrorContainer" id="error-page">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>

        <Link to="/">Retournez sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  );
}
