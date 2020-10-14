import React from "react";

import { RiKnifeFill } from "react-icons/ri";

import { IconContext } from "react-icons";

const Hate = (props) => {
  const { count, onToggle } = props;

  return (
    <span
      className="badge badge-warning"
      style={{ padding: "0.4em" }}
      onClick={onToggle}
    >
      <IconContext.Provider
        value={{ style: { color: "red", verticalAlign: "middle" } }}
      >
        <RiKnifeFill />
      </IconContext.Provider>
      <i className="far fa-angry" />
      {count}
    </span>
  );
};

export default Hate;
