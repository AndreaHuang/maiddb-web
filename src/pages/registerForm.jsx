import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import AppForm from "../components/common/appForm";
import userService from "../services/userService";
import tokenService from "../services/tokenService";
import Constants from "../config/constants";

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
  doSubmit = async () => {
    try {
      const { name, email, password } = this.state.data;
      const response = await userService.register(name, email, password);
      tokenService.saveToken(response.headers[Constants.TOKEN_HEADER_NAME]);
      window.location = "/";
    } catch (ex) {
      console.error(ex);
      if (ex.response && ex.response.status === 400) {
        if (ex.response.data) {
          const errorCode = ex.response.data.errorCode;
          if (errorCode === "BERR002")
            toast.error("This email is already registered.");
          else if (errorCode === "BERR003") {
            toast.error("This name is in use.");
          } else {
            toast.error(ex.response.data.message);
          }
        } else {
          toast.error(ex.message);
        }
      } else {
        toast.error(ex.message);
      }
    }
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
