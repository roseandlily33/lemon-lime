//import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  CarouselDiv,
  Direction,
  LeftDirection,
  RightDirection,
  Indicator,
  RecipeImage,
} from "./singleRecipeCarousel.styles";
import CloudImage from "../../Photos/photo.component";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images?.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images?.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <CarouselDiv>
      <CloudImage
        key={currentIndex}
        publicId={images[currentIndex].publicId}
        alt="user image"
      />
      <Direction>
        <LeftDirection onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icon icon-cheveron-left-circle"
          >
            <circle cx="12" cy="12" r="10" className="primary" />
            <path
              className="secondary"
              d="M13.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L10.42 12l3.3 3.3z"
            />
          </svg>
        </LeftDirection>
        <Indicator>
          {images?.map((_, index) => (
            <RecipeImage
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></RecipeImage>
          ))}
        </Indicator>
        <RightDirection onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icon icon-cheveron-right-circle"
          >
            <circle cx="12" cy="12" r="10" className="primary" />
            <path
              className="secondary"
              d="M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z"
            />
          </svg>
        </RightDirection>
      </Direction>
    </CarouselDiv>
  );
};
Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      publicId: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;
