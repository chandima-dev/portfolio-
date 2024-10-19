import React, { useEffect, useRef, useState } from 'react';
import styles from './Services.module.css'; // Import CSS module
import SubSlider from '../../components/SubSlider/SubSlider';
import servicesData from './services_data'; // Import the data

const Services = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const imageRefs = useRef([useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]);
  const textRefs = useRef([useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Loop through all sections for animation
      servicesData.forEach((section, index) => {
        const imagesSection = imageRefs.current[index].current.children;
        const textSection = textRefs.current[index].current;

        if (textSection.getBoundingClientRect().top < window.innerHeight) {
          // For section 4 (index 3), animate text from right to left
          if (index === 3) {
            textSection.classList.add(styles.slideInLeft);
          } else {
            textSection.classList.add(styles.slideInRight); // Text from left to right for others
          }
        }

        for (let image of imagesSection) {
          if (image.getBoundingClientRect().top < window.innerHeight) {
            // For section 5 (index 4), animate images from left to right
            if (index === 4) {
              image.classList.add(styles.slideInRight);
            } else {
              image.classList.add(styles.slideInLeft); // Images from right to left for others
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // JSX for Web View
  const renderWebView = () => (
    <div>
      <SubSlider 
        title="Explore Our Services" 
        description="We specialize in delivering tailored solutions for the Architecture, Engineering, and Construction industry." 
      />
      {servicesData.map((section, index) => (
        <div className={styles.serviceContainer} key={index}>
          <div className={styles.serviceContent}>
            {index % 2 === 0 ? (
              <>
                <div className={styles.serviceText} ref={textRefs.current[index]}>
                  <h2>{section.title}</h2>
                  <ul>
                    {section.descriptionPoints.map((point, i) => {
                      const [title, description] = point.split(': '); 
                      return (
                        <li key={i} style={{ marginBottom: '12px' }}>
                          <strong>{title}:</strong> {description}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={styles.serviceImages} ref={imageRefs.current[index]}>
                  {section.images.map((image, i) => (
                    <div className={`${styles.imageSquare} ${i === 0 ? styles.largeImage : ''}`} key={i}>
                      <img src={image} alt={`Falcon Engineering ${index + 1} - ${i + 1}`} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className={styles.serviceImages} ref={imageRefs.current[index]}>
                  {section.images.map((image, i) => (
                    <div className={`${styles.imageSquare} ${i === 0 ? styles.largeImage : ''}`} key={i}>
                      <img src={image} alt={`Falcon Engineering ${index + 1} - ${i + 1}`} />
                    </div>
                  ))}
                </div>
                <div className={styles.serviceText} ref={textRefs.current[index]}>
                  <h2>{section.title}</h2>
                  <ul>
                    {section.descriptionPoints.map((point, i) => {
                      const [title, description] = point.split(': '); 
                      return (
                        <li key={i} style={{ marginBottom: '12px' }}>
                          <strong>{title}:</strong> {description}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  // JSX for Mobile View
  const renderMobileView = () => (
    <div>
      <SubSlider 
        title="Explore Our Services" 
        description="We specialize in delivering tailored solutions for the Architecture, Engineering, and Construction industry." 
      />
      {servicesData.map((section, index) => (
        <div className={styles.serviceContainer} key={index}>
          <div className={styles.serviceContent}>
            <div className={styles.serviceText} ref={textRefs.current[index]}>
              <h2>{section.title}</h2>
              {section.images.map((image, i) => (
                <div key={i}>
                  <div className={`${styles.imageSquare} ${i === 0 ? styles.largeImage : ''}`} ref={imageRefs.current[index]}>
                    <img src={image} alt={`Falcon Engineering ${index + 1} - ${i + 1}`} />
                  </div>
                  <div style={{ height: '1vh' }} /> {/* Space after image */}
                </div>
              ))}
              <ul>
                {section.descriptionPoints.map((point, i) => {
                  const [title, description] = point.split(': '); 
                  return (
                    <li key={i}>
                      <strong>{title}:</strong> {description}
                      <div style={{ height: '1vh' }}/>
                    </li>
                  );
                })}
              </ul>
              <div style={{ height: '15vh' }} /> {/* Space after description */}
            </div>
          </div>
        </div>
      ))}
      <div style={{ marginBottom: '-28vh' }} /> 
    </div>
  );

  return isMobile ? renderMobileView() : renderWebView();
};

export default Services;
