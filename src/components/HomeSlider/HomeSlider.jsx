import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeSlider.css';

const Slideshow = () => {
  const slides = [
    {
      id: 1,
      image: '/images/img1.jpeg',
      title: 'Title 1',
      description: 'This is the description for image 1',
      buttonLabel: 'Click Here 1',
      buttonLink: '/aboutus',
    },
    {
      id: 2,
      image: '/images/img2.jpeg',
      title: 'Title 2',
      description: 'This is the description for image 2',
      buttonLabel: 'Click Here 2',
      buttonLink: '/projects',
    },
    {
      id: 3,
      image: '/images/img3.jpeg',
      title: 'Title 3',
      description: 'This is the description for image 3',
      buttonLabel: 'Click Here 3',
      buttonLink: '/contactus',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSlidingOut, setIsSlidingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSlidingOut(true); // Start slide-out animation
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setIsSlidingOut(false); // Reset sliding out after changing slide
      }, 900); // Wait for animation to finish before changing slide
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleButtonClick = () => {
    const link = slides[currentSlide].buttonLink;
    console.log(slides[currentSlide].id);
    navigate(link);
  };

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
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
