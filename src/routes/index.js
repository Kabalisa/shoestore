import React, { useContext, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Cart } from "../components";
import { Context as ProductContext } from "../context/productContext";

const Routes = () => {
  const { initialiseCart } = useContext(ProductContext);

  useEffect(() => {
    let isActive = true;

    if (isActive) {
      initialiseCart();
    }

    return () => {
      isActive = false;
    };
  }, []);

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
