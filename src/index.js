import React from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";
// import "./i18n";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

const app = (
  <React.Fragment>
    <App />
  </React.Fragment>
);
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(app, rootElement);
} else {
  ReactDOM.render(app, rootElement);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
