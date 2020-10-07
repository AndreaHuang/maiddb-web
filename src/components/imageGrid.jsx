import React, { useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const ImageGrid = (props) => {
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const { images, path, size = 100 } = props;
  const THUMBNAILURL = "thumbnailUrl";
  const URL = "url";
  if (!images) {
    return null;
  }
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
      >
        {images.map((img, idx) => (
          <div key={idx}>
            <img
              className="d-block w-45"
              alt="image"
              src={img[THUMBNAILURL]}
              style={{ width: size, height: size * 1.5 }}
            />
          </div>
        ))}
      </Carousel>

      {/* <Modal className="w-90" show={selectedImageUrl !== null}>
        <img
          alt="image"
          src={img[URL]}
          style={{ width: size, height: size * 1.5 }}
        />
      </Modal> */}
    </>
  );
};

export default ImageGrid;
