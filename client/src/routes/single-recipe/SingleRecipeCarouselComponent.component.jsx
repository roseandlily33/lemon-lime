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
import CloudImage from "../../photos-cloudinary/photo.component";
import ChevronLeft from "../../images/icons/ChevronLeftIcon.icon";
import ChevronRight from "../../images/icons/ChevronRightIcon.icon";

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
          <ChevronLeft />
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
          <ChevronRight />
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
