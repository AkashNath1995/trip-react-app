// ImageCarousel.js
import React, { useState } from "react";
import "./FranceEuroImage.css"; // Import the CSS file

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://cdn.pixabay.com/photo/2020/07/12/16/40/paris-5397889_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/11/24/10/25/town-6820819_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/04/25/23/17/rome-6207755_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/01/02/12/32/cathedral-5881418_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/08/03/11/48/canal-6519196_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/10/27/15/51/italy-8345688_1280.jpg"
  ];

  const handleImageClick = () => {
    // Change the current image to the next one in the array
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="image-carousel-container">
      <h2>Images</h2>
      <div>
        <img
          className="image-carousel-img"
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          onClick={handleImageClick}
        />
      </div>
      <div className="carousel-navigation">
        <button className="carousel-arrow" onClick={handleImageClick}>
          {"⬅"}
        </button>
        <div className="carousel-dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentImage ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
        <button className="carousel-arrow" onClick={handleImageClick}>
          {"⮕"}
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
