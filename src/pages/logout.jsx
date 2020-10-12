import { Component } from "react";

import loginService from "../services/loginService";

class Logout extends Component {
  componentDidMount() {
    // need to do it in this method
    loginService.logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}
export default Logout;
