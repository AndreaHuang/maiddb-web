import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import Cases from "./pages/cases";
import NewCaseForm from "./pages/newCaseForm";
import NavBar from "./pages/navBar";
import NotFound from "./pages/notFound";
import LoginForm from "./pages/loginForm";
import RegisterForm from "./pages/registerForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Container">
        <Switch>
          <Route path="/cases" component={Cases} />
          <Route path="/newCase" component={NewCaseForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/notfound" component={NotFound} />
          <Redirect from="/" to="/cases" exact />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
