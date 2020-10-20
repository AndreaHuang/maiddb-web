import React, { useState } from "react";
import config from "../config/config";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AppModal from "./appModal";

const IMAGEURL = config.apiUrl;
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
  const { images, size = 100 } = props;
  const THUMBNAILURL = "url";
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
        {images.map((image, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImageUrl(image[URL])}
            data-toggle="modal"
            data-target="#imageModal"
          >
            <img
              alt="A Case"
              className="d-block w-45"
              src={IMAGEURL + image[THUMBNAILURL]}
              style={{ width: size, height: size * 1.5 }}
            />
          </div>
        ))}
      </Carousel>
      {selectedImageUrl && (
        <AppModal id="imageModal">
          <div data-dismiss="modal">
            <img
              alt="A Case"
              src={IMAGEURL + selectedImageUrl}
              style={{ width: size * 3, height: size * 6 }}
            />
          </div>
        </AppModal>
      )}
    </>
  );
};

export default ImageGrid;
