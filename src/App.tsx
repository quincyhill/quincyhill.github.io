import React from "react";
import BaseRouter from "./routes";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <BaseRouter />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
