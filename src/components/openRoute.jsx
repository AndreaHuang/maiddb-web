import React from "react";
import { Route, Redirect } from "react-router-dom";
import tokenService from "../services/tokenService";
function OpenRoute({ path, component: Component, render, ...rest }) {
  return (
    <Route
      path={path}
      render={(props) => {
        console.log(props);
        if (tokenService.getUser()) {
          return <Redirect to="/" />;
        } else {
          return Component ? <Component {...props} /> : render(props);
        }
      }}
      {...rest}
    />
  );
}

export default OpenRoute;
