import React from "react";
import { Route, Redirect } from "react-router-dom";
import tokenService from "../services/tokenService";
function ProtectedRoute({ path, component: Component, render, ...rest }) {
  return (
    <Route
      path={path}
      render={(props) => {
        if (!tokenService.getUser()) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        } else {
          return Component ? <Component {...props} /> : render(props);
        }
      }}
      {...rest}
    />
  );
}

export default ProtectedRoute;
