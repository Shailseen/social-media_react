import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/Login/Login";
import { Provider } from "react-redux";
import store from "./store/store";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Login />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
