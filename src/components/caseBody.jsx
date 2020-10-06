import React from "react";
import ImageGrid from "./imageGrid";
import _ from "lodash";
const CaseBody = (props) => {
  const { isDetailsMode, details, images, showDetails } = props;
  if (isDetailsMode) {
    return (
      <>
        <p>{details}</p>
        <ImageGrid images={images} path="url" size={400} />
      </>
    );
  } else {
    return (
      <React.Fragment>
        <p> {_.truncate(details, { length: 100 })} </p>
        <span
          onMouseEnter={() => {
            console.log("show Details");
            showDetails();
          }}
        >
          ...
        </span>
        <ImageGrid images={images} path="thumbnailUrl" size={100} />
      </React.Fragment>
    );
  }
};

export default CaseBody;
