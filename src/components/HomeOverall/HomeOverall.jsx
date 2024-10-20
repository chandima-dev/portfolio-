import React from 'react';
import styles from './HomeOverall.module.css'; // Import the CSS module

const HomeOverall = () => {
  return (
    <div className={styles.fullWidthContainer}>
      <div className={styles.maxWidthContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.centeredText}>
            <h1>
              <span className={styles.welcomeText}>Welcome to</span> <br />
              <span className={styles.companyNameText}>Falcon Engineering<br /> & Architects Pvt. Ltd</span>
            </h1>
            <p className={styles.paragraphText}>
              We are an innovative Architectural and Engineering Design Firm, driven by a professional team of skilled engineers, architects, Quantity Surveyors, and draftsmen. We specialize in delivering tailored solutions for the Architecture, Engineering, and Construction (AEC) industry. Whether you need precision CAD conversions, comprehensive building designs, or advanced BIM modeling, we’re here to bring your vision to life with cutting-edge technology and expertise. Explore our wide range of services and let us transform your ideas into reality.
            </p>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper} style={{ '--delay': '0s' }}>
              <img src="/images/SingleProducts/Architectural Design/CANADIAN FARMHOUSE/9.jpg" alt="Image 1" className={styles.imageStyle} />
            </div>
            <div className={styles.imageWrapper} style={{ '--delay': '0.5s' }}>
              <img src="/images/SingleProducts/Architectural Design/423 ERIE AVENUE/Kitchen_2_2.png" alt="Image 2" className={styles.imageStyle} />
            </div>
            <div className={styles.imageWrapper} style={{ '--delay': '1s' }}>
              <img src="/images/SingleProducts/Architectural Design/TEXAS, USA 8 ACRES/E_Unit 1_Living2.png" alt="Image 3" className={styles.imageStyle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOverall;
