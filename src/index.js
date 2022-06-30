import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/Login/Login";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./routes/Home/Home";
import { Profile } from "./routes/Profile/Profile";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile/:username/posts" element={<Profile />} />
            <Route path="/profile/:username/followers" element={<Profile />} />
            <Route path="/profile/:username/following" element={<Profile />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
