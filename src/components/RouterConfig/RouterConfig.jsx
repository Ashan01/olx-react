import React from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";
import SellForm from "../../pages/SellForm";
import Home from "../../pages/Home";
import SignUp from "../../pages/SignUp";

export default function RouterConfig() {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={SignUp} />
            {/* <Redirect from="/" to="/home" /> */}
            <Route exact path="/home" component={Home} />
            <Route path="/sell" component={SellForm} />

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
