import { React } from "react";
import BrokenLink from "../../styles/assets/broken-link.png";

import "./errorPage.scss";

function ErrorPage() {
  return (
    <div id="errorPage">
      <img src={BrokenLink} alt={BrokenLink}></img>
      <h1>¡Uy! Algo salió mal.</h1>
      <p>
        Estamos intentado solucionar el problema. Por favor, intentá de nuevo en
        unos minutos.
      </p>
    </div>
  );
}

export default ErrorPage;
