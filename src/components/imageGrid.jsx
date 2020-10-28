import React from "react";

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
 
  const { images,imageModalId,toggleImageModal} = props;
 

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
        {images.map((imageUrl, idx) => (
          <div
            key={idx}
            onClick={() =>{toggleImageModal(imageUrl)}}
            data-toggle="modal"
            data-target={"#"+imageModalId}
          >
            <img
              alt="A Case"
              className="image-thumbnail"
              src={imageUrl}
            />
          </div>
        ))}
      </Carousel>

      
    </>
  );
};

export default ImageGrid;
