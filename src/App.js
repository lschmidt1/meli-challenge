import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header/header";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./styles/index.scss";

export const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter id="main">
        <Header />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
