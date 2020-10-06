import React from "react";

import { RiShareForwardLine } from "react-icons/ri";

import { IconContext } from "react-icons";

const Share = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <RiShareForwardLine />
      </IconContext.Provider>
    </div>
  );
};

export default Share;
