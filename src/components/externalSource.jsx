import React from "react";

const ExternalSource = (props) => {
  const { link, name } = props;
  return (
    <span>
      {" "}
      Source: <a href={link}>{name}</a>{" "}
    </span>
  );
};

export default ExternalSource;
