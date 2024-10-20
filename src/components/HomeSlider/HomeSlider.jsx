import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import slidesData from './slider-data'; // Import the data sheet
import './HomeSlider.css';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSlidingOut, setIsSlidingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSlidingOut(true); // Start slide-out animation
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
        setIsSlidingOut(false); // Reset sliding out after changing slide
      }, 900); // Wait for animation to finish before changing slide
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    const link = slidesData[currentSlide].buttonLink;
    console.log(slidesData[currentSlide].id);
    navigate(link);
  };

  return (
    <div className="slideshow-container">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
          <div className={`slide-content ${index === currentSlide ? 'slide-in' : ''} ${isSlidingOut && index === currentSlide ? 'slide-out' : ''}`}>
            <h2 className="slide-title">{slide.title}</h2>
            <p className="slide-description">{slide.description}</p>
            <button onClick={handleButtonClick} className="slide-button">
              {slide.buttonLabel}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
