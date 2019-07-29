import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SingIn from "../Pages/SingIn";
import SingUp from "../Pages/SingUp";

import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/register" component={SingUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
