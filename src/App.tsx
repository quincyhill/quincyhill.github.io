import React from "react";
import BaseRouter from "./routes";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
// trying to absolve myself of using bootstrap since id reather use styled components instead
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
