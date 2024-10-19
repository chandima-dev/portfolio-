import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './Home.module.css'; // Import as a module
import HomeProjects from '../../components/HomeProjects/HomeProjects';

const Slideshow = () => {

  return (
    <div className={styles.slideshow}>
      <p>testing</p> {/* This is just a placeholder. You can replace it with the actual slider component */}
      <HomeProjects  />
    </div>
  );
};

export default Slideshow;
