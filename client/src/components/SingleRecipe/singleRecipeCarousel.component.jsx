import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CarouselDiv, Direction, LeftDirection, RightDirection, Indicator, RecipeImage } from "./singleRecipeCarousel.styles";


const Carousel = ({images}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
    return ( 
        <CarouselDiv>
        <img
          key={currentIndex}
          src={images[currentIndex].data_url}
          alt="userImage"
        />
        <Direction>
        <LeftDirection onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </LeftDirection>
        <Indicator>
        {images.map((_, index) => (
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
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </RightDirection>
      </Direction>
     
    </CarouselDiv>
     );
}
 
export default Carousel;