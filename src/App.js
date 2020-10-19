import React, { useEffect, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "./App.css";
import Cases from "./pages/cases";
import NewCaseForm from "./pages/newCaseForm";
import NavBar from "./pages/navBar";
import NotFound from "./pages/notFound";
import LoginForm from "./pages/loginForm";
import RegisterForm from "./pages/registerForm";
import Logout from "./pages/logout";
import Profile from "./pages/profile";

import tokenService from "./services/tokenService";
import ProtectedRoute from "./components/protectedRoute";
import OpenRoute from "./components/openRoute";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    setCurrentUser(tokenService.getUser());
  }, []);
  return (
    <div className="App">
      <ToastContainer />
      <NavBar user={currentUser} />
      <div className="container-fluid">
        <Switch>
          <Route path="/cases" render={(props) => <Cases {...props} />} />
          <ProtectedRoute path="/newCase" component={NewCaseForm} />
          <OpenRoute path="/login" component={LoginForm} />
          <OpenRoute path="/register" component={RegisterForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/profile" component={Profile} />
          <Route path="/notfound" component={NotFound} />
          <Redirect from="/" to="/cases" exact />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
