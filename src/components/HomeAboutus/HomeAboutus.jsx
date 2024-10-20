import React, { useEffect, useRef, useState } from 'react';
import styles from './HomeAboutus.module.css';

const HomeBottom = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content} ref={contentRef}>
        <h1 className={`${styles.title} ${isVisible ? styles.animate : ''}`}>
          About Us
        </h1>
        <h2 className={`${styles.subtitle} ${isVisible ? styles.animate : ''}`}>
          Crafting your vision with<br /> Accuracy and Adaptability
        </h2>
        <p className={`${styles.description1} ${isVisible ? styles.animate : ''}`}>
          At Falcon Engineering, we bring together a diverse team of professionals passionate about pushing the boundaries of architectural and engineering design. With years of experience in the AEC industry, we pride ourselves on delivering bespoke services tailored to meet the unique needs of every client. Our commitment to excellence and innovation ensures that each project is handled with the utmost precision and care.
        </p>
        <p className={`${styles.description2} ${isVisible ? styles.animate : ''}`}>
          We believe our work speaks for itself. Explore our portfolio of successful projects, ranging from residential buildings and commercial spaces to complex engineering designs. See how we bring innovative ideas to life with high-quality architectural visualizations, precise BIM models, and expertly crafted structural designs.
        </p>
      </div>
    </div>
  );
};

export default HomeBottom;
