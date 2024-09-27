// SubSlider.js
import React, { useState, useEffect } from 'react';
import './SubSlider.css';

const SubSlider = ({ title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "../../../public/images/img1.jpeg",
    "../../../public/images/img2.jpeg",
    "../../../public/images/img3.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [images.length]);

  return (
    <div className="sub-slideshow-container">
      <img src={images[currentIndex]} alt="slideshow" className="sub-slide" />
      <div className="sub-slideshow-text" >
        {title}
      </div>
      <div className="sub-slideshow-text-para1">
        {description}
      </div>
    </div>
  );
};

export default SubSlider;
