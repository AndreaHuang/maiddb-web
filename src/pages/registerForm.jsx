import React from "react";
import Joi from "joi-browser";

import AppForm from "../components/common/appForm";

class RegisterForm extends AppForm {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    name: Joi.string().required().min(5).max(50).label("User Name"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().min(6).max(20).label("Password"),
  };
  doSubmit = () => {
    console.log("Submit Registration Form");
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "User Name")}
          {this.renderInput("email", "Email")}
          {this.renderPasswordInput("password", "Password")}
          {this.renderButton("Sign Up")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
