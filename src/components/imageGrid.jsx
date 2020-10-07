import React, { useState } from "react";

import { Modal } from "react-bootstrap";
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
  const { images, size = 100 } = props;
  const THUMBNAILURL = "thumbnailUrl";
  const URL = "url";
  const dismissModalDialog = () => {
    setSelectedImageUrl(null);
  };
  const selectImage = (image) => {
    setSelectedImageUrl(image[URL]);
  };
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
          <div key={idx} onClick={() => selectImage(image)}>
            <img
              alt="A Case"
              className="d-block w-45"
              src={image[THUMBNAILURL]}
              style={{ width: size, height: size * 1.5 }}
            />
          </div>
        ))}
      </Carousel>

      <Modal
        className="w-90"
        show={selectedImageUrl !== null}
        onHide={dismissModalDialog}
      >
        <div onClick={dismissModalDialog}>
          <img
            alt="A Case"
            src={selectedImageUrl}
            style={{ width: size * 3, height: size * 6 }}
          />
        </div>
      </Modal>
    </>
  );
};

export default ImageGrid;
