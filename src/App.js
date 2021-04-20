import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header";
import ProductsList from "./components/productsList/productsList";
import "./styles/index.scss";

function App() {
  return (
    <BrowserRouter id="main">
      <Header />
      <Switch>
        <Route exact path="/items" component={ProductsList} />
        {/* <Route exact path="/items/:id" component={ProductDetail} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
