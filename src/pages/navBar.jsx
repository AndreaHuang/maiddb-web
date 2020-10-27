import React from "react";
import { Link } from "react-router-dom";
const NavBar = ({ user }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <img className="nav-logo" alt="logo" src="../images/logo.png"/>
      <Link className="nav-link" to="/"> Maid DB</Link>
      </div>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
 
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
          {/* {user && (
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          )} */}
          {user && (
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
