import React, { useState, useEffect } from "react";
import "./App.css";

const images = [
  "images/dorm1.jpg",
  "images/dorm2.jpg",
  "images/dorm3.jpg",
  "images/dorm4.jpg",
  "images/dorm5.jpg",
  "images/dorm6.jpg",
  "images/dorm7.jpg"
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index) => {
    if (index >= images.length) setCurrentSlide(0);
    else if (index < 0) setCurrentSlide(images.length - 1);
    else setCurrentSlide(index);
  };

  const nextSlide = () => showSlide(currentSlide + 1);
  const prevSlide = () => showSlide(currentSlide - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="slider-container">
      <div className="slides">
        {images.map((src, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
          >
            <img src={src} alt={`Dormitory ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="button" id="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="button" id="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default App;