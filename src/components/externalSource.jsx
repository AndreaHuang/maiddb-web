import React from "react";

const ExternalSource = (props) => {
  const { link, name } = props;
  return (
    <span>
      {" "}
      Origin: <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>{" "}
    </span>
  );
};

export default ExternalSource;
