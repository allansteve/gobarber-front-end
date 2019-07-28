import React from "react";
import { Switch, Route } from "react-router-dom";

import SingIn from "../Pages/SingIn";
import SingUp from "../Pages/SingUp";

import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/register" component={SingUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
