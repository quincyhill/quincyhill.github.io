import React from "react";
import { Route } from "react-router-dom";
import Home from "./layouts/Home";

function BaseRouter() {
  return (
    <React.Fragment>
      <Route path="/" component={Home} />
    </React.Fragment>
  );
}

export default BaseRouter;
