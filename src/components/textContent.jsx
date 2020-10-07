import React, { Component, useEffect, useState } from "react";
import _ from "lodash";

const viewMoreText = "View More";
const viewLessText = "View Less";

const defaultLength = 100;

class TextContent extends Component {
  state = {
    isLongText: true,
    isDetailsMode: false,

    fullText: this.props.content,
    truncatedText: "",
  };
  constructor(props) {
    super(props);

    const length = this.props.length > 0 ? this.props.length : defaultLength;

    const isLongText = this.props.content && this.props.content.length > length;
    this.state.isLongText = isLongText;

    if (isLongText) {
      //Default is shortMode
      this.state.isDetailsMode = false;
      this.state.truncatedText = _.truncate(this.props.content, {
        length: length,
      });
    }
    console.log(length);
    console.log(this.state);
  }

  toggle = () => {
    this.setState({ isDetailsMode: !this.state.isDetailsMode });
  };

  render() {
    const { isLongText, isDetailsMode, fullText, truncatedText } = this.state;

    if (!fullText) {
      return null;
    }
    if (!isLongText) {
      return <p>{fullText}</p>;
    }

    if (isDetailsMode) {
      return (
        <p>
          {fullText} ...
          <span onClick={this.toggle}>
            <small>{viewLessText}</small>
          </span>
        </p>
      );
    } else {
      return (
        <p>
          {truncatedText} ...
          <span onClick={this.toggle}>
            <small>{viewMoreText}</small>
          </span>
        </p>
      );
    }
  }
}

export default TextContent;
