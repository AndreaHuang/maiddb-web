import React, { Component } from "react";
import { Helmet } from "react-helmet";

class NotFound extends Component {
  state = {};
  render() {
    return (<>
      <h1>Not Found</h1>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Information not found" />
        <meta name="robots" content="noindex" />
      </Helmet>
    </>
    );
  }
}

export default NotFound;
