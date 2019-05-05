import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../redux/store/configureStore";
import HomePage from "./HomePage";

const store = configureStore();

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
