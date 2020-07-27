import React from "react";
import BaseRouter from "./routes";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <BaseRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
