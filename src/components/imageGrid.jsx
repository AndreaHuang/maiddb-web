import React from "react";
import config from "../config/config";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
 
  const { images,imageModalId,toggleImageModal} = props;
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
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
      >
        {images.map((image, idx) => (
          <div
            key={idx}
            onClick={() =>{toggleImageModal(IMAGEURL+image[URL])}}
            data-toggle="modal"
            data-target={"#"+imageModalId}
          >
            <img
              alt="A Case"
              className="image-thumbnail"
              src={IMAGEURL + image[THUMBNAILURL]}
            />
          </div>
        ))}
      </Carousel>

      
    </>
  );
};

export default ImageGrid;
