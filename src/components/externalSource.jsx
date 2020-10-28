import React from "react";

const ExternalSource = (props) => {
  const { link, name } = props;
  return (
    <span>
      {" "}
      Origin: <a href={link}>{name}</a>{" "}
    </span>
  );
};

export default ExternalSource;
