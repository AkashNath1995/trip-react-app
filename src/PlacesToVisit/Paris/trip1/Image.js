// ImageCarousel.js
import React, { useState } from "react";
import "./Image.css"; // Import the CSS file

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1591815583350-228fd53be9e8?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1582281204158-23b39ef70cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1611830029069-6c0b6d962acd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
