import React from "react";
import BaseRouter from "./routes";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <BaseRouter />
    </BrowserRouter>
  );
}

export default App;
