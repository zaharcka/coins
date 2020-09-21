import React from "react";

import createStore from "./store";
import { Provider } from "react-redux";
import MainPage from "./components/MainPage/index.js";
import CurrencyPage from "./components/CurrencyPage";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/currency/:cur" component={CurrencyPage} />
      </Switch>
    </Provider>
  );
}

export default App;
