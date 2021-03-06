import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SellForm from "../../pages/SellForm";
import Home from "../../pages/Home";
import SignUp from "../../pages/SignUp";
import Login from "../../pages/Login";
import SellProducts from "../../pages/SellProducts";

export default function RouterConfig() {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route path="/sell" component={SellForm} />
            <Route path="/home/:id" component={SellProducts} />
            <Route
               path="*"
               component={() => {
                  return <h1>404 not Found</h1>;
               }}
            />
         </Switch>
      </Router>
   );
}
