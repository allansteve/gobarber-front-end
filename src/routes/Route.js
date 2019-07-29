import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import AuthLayout from "~/Pages/_layouts/auth";
import DefaultLayout from "~/Pages/_layouts/default";

import store from "~/store";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { singed } = store.getState().auth;

  if (!singed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (singed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = singed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: false
};
