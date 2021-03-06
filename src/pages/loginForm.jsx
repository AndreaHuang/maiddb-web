import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import AppForm from "../components/appForm";
import loginService from "../services/loginService";
import tokenService from "../services/tokenService";
import Constants from "../config/constants";
import { Helmet } from "react-helmet";

class LoginForm extends AppForm {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().min(6).max(20).label("Password"),
  };
  doSubmit = async () => {
    try {
      const { email, password } = this.state.data;
      const response = await loginService.login(email, password);
      tokenService.saveToken(response.headers[Constants.TOKEN_HEADER_NAME]);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (
        ex.response &&
        (ex.response.status === 401 || ex.response.status === 400)
      ) {
        toast.error("Invalid Email or Password.");
      } else {
        toast.error(ex.message);
      }
    }
  };
  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} className="main-form">
          {this.renderInput("email", "Email")}
          {this.renderPasswordInput("password", "Password")}
          {this.renderButton("Login")}
        </form>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Login page" />
          <meta name="robots" content="noindex" />
        </Helmet>
      </>

    );
  }
}

export default LoginForm;
