import React from "react";

const Hate = (props) => {
  const { count, onToggle } = props;

  return (
    <span
      className="badge badge-warning"
      style={{ padding: "0.4em" }}
      onClick={onToggle}
    >
      <i className="far fa-thumbs-down" />
      {count}
    </span>
  );
};

export default Hate;
