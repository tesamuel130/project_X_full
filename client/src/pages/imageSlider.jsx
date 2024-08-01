import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <div
            className={index === currentIndex ? "slide active-slide" : "slide"}
            key={index}
          >
            {index === currentIndex && (
              <img src={image} alt={`Slide ${index}`} className="slide-image" />
            )}
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
