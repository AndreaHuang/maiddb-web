import React from "react";
import { Link } from "react-router-dom";
const NavBar = ({ user }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
      
      <Link className="nav-link" to="/"> 
      <img className="nav-logo" alt="logo" src="../logo.png"/>
      </Link>
      </div>

 
      <div className="navbar-navigation" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/cases">
              Cases
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/newCase">
              Report A Case
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav">
          {!user && (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
          {!user && (
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Sign up
              </Link>
            </li>
          )}
          {user && (
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                <small>Logout</small>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
