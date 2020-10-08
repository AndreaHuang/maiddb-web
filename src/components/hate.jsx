import React from "react";

// import { RiKnifeLine, RiKnifeFill } from "react-icons/ri";

// import { IconContext } from "react-icons";

import { Badge } from "react-bootstrap";

const Hate = (props) => {
  const { count, onToggle } = props;

  return (
    <Badge onClick={onToggle}>
      {/* <IconContext.Provider
          value={{ style: { color: "red", verticalAlign: "middle" } }}
        >
          {hated ? <RiKnifeFill /> : <RiKnifeLine />}
          </IconContext.Provider> */}
      <i className="far fa-angry" />

      {count}
    </Badge>
  );
};

export default Hate;
