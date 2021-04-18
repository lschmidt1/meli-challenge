import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header"
import logo from "./logo.svg";
import "./styles/index.scss";

function App() {
  return (
      <BrowserRouter id ="main">
        <Header/>
      </BrowserRouter>
  );
}

export default App;
