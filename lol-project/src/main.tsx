import { Provider } from "react-redux";
// Importation de provider BrowserRouter
import { BrowserRouter } from "react-router-dom";
// Importation de ReactDom qui nous permettra d'injecter notre application dans le DOM
import ReactDOM from "react-dom/client";

// Importation du composant principal
import App from "./components/App";
// Importation du store
import store from "./store/store.tsx";

// Importation du fichier de style global
import "./styles/index.scss";

// Création du root pour l'application (a partir d'un élément HTML)
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Injection de l'application dans le DOM
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
