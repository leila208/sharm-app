import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";
import Reducer from "./store/Reducer";
const store = legacy_createStore(Reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
