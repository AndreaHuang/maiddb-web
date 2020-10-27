import React from "react";

const Share = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <i className="far fa-share-square"></i>
    </div>
  );
};

export default Share;
