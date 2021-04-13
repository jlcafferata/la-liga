import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "./index.css";
import { configureStore } from './redux/store';
import App from "./App";

ReactDOM.render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
