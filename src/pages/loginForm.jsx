import React from "react";
import Joi from "joi-browser";

import AppForm from "../components/common/appForm";

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
  doSubmit = () => {
    console.log("Submit Login form");
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderPasswordInput("password", "Password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
