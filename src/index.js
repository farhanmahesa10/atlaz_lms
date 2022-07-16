import React from "react";
import ReactDOM from "react-dom";
import moment from "moment-timezone";

//dari note? paster disini

import "./assets/scss/setup/nomedia.scss";
import "./assets/scss/setup/bootstrap_setup.scss";
// import "./assets/scss/main.scss";
import "./main-utils.css";
// dari note? berhenti disini

import "./index.css";
import "./assets/css/embla.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux-setup";
moment.tz.setDefault("Asia/Jakarta");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
