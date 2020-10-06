import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Cart } from "../components";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
