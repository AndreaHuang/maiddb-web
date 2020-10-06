import React from "react";

import { RiKnifeLine, RiKnifeFill } from "react-icons/ri";

import { IconContext } from "react-icons";

import { Badge } from "react-bootstrap";

const Hate = (props) => {
  const { hated, count, onToggle } = props;

  return (
    <Badge onClick={onToggle}>
      <span>
        <IconContext.Provider
          value={{ style: { color: "red", verticalAlign: "middle" } }}
        >
          {hated ? <RiKnifeFill /> : <RiKnifeLine />}
        </IconContext.Provider>
        {count}
      </span>
    </Badge>
  );
};

export default Hate;