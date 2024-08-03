import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();
axios.defaults.baseURL = "https://extremes-dummy-server.onrender.com/";

// " http://localhost:8000";

// "https://extremes-dummy-server.onrender.com/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      {" "}
      <App />{" "}
    </QueryClientProvider>{" "}
  </BrowserRouter>
);
