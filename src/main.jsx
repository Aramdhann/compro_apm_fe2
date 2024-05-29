import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import "./i18n";
import Loading from "./components/Loading.jsx";
import FloatingSocialMedia from "./components/FloatingSocialMedia.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loading/>}>
    <BrowserRouter>
      <App />
      <FloatingSocialMedia />
    </BrowserRouter>
  </Suspense>
);
