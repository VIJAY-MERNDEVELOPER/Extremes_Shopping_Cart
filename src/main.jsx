import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

import { Provider } from "react-redux";
import { store } from "./app/store/store.js";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = "https://extremes-dummy-server.onrender.com/";
// ("http://localhost:3001/api");

//  import.meta.env.VITE_APP_API_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
