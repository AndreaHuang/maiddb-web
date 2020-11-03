import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect, Switch} from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";

import Cases from "./pages/cases";
import SingleCase from './pages/singleCase';
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
// import BuildSiteMap from "./pages/buildSiteMap";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    setCurrentUser(tokenService.getUser());
  }, []);
  return (
    <BrowserRouter>
      <header>
        <div className="navbar-container">
            <NavBar user={currentUser} />
        </div>
        <div className="notification-container">
          <ToastContainer />
       </div>
      </header>
      <main>
        <div className="main-container">
        <div className="content-container">
        <Switch>
          <Route path="/cases/:id"  render={(props) => <SingleCase {...props} />} />
          <Route path="/cases"  render={(props) => <Cases {...props} />} />
          <ProtectedRoute path="/newCase" component={NewCaseForm} />
          <OpenRoute path="/login" component={LoginForm} />
          <OpenRoute path="/register" component={RegisterForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/profile" component={Profile} />
          <Route path="/notfound" component={NotFound} />
          <Redirect from="/" to="/cases" exact />
          {/* <Route path="/build-sitemap" component={BuildSiteMap}/> */}
          <Redirect to="/notfound" />
          
        </Switch>
        </div>
        <div className="sidebar-container">

        </div>
        </div>
      </main>

    </BrowserRouter>
  );
}

export default App;
