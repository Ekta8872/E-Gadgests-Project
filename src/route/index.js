import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import DashBoard from "../screen/Dashboard";
import ProductDetails from "../screen/Products";
// import { BrowserRouter } from

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/ProductDetails">Products</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route path="/ProductDetails" component={ProductDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
