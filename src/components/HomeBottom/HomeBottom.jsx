import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './HomeBottom.module.css'; // Import your CSS module

const HomeProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Create a ref for the component
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the component is in the viewport
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the animation
          observer.disconnect(); // Stop observing once the component is visible
        }
      },
      {
        threshold: 0.1, // Adjust this value as needed (0.1 means 10% of the element is visible)
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the component
    }

    return () => {
      observer.disconnect(); // Cleanup the observer on unmount
    };
  }, []);

  return (
    <div className={styles.outerContainer} ref={sectionRef}>
      <div className={styles.content}>
        <h1 className={`${styles.title} ${isVisible ? styles.slideIn : ''}`}>
          Let’s combine your vision <br /> with our expertise
        </h1>
        <p className={`${styles.description} ${isVisible ? styles.slideIn : ''}`}>
          Crafting Innovative, Sustainable Designs for a Global Market
        </p>
        <button
          className={`${styles.button} ${isVisible ? styles.slideIn : ''}`}
          onClick={() => navigate('./contactus')} // Navigate to ./contactus on click
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomeProjects;
