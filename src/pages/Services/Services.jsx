import React, { useEffect, useState } from 'react';
import styles from './Services.module.css';
import { service_id_1, service_id_2, service_id_3, service_id_4, service_id_5 } from './data'; // Import all services

const CardView = () => {
  const services = [service_id_1, service_id_2, service_id_3, service_id_4, service_id_5]; // Combine all services

  const [visibleCards, setVisibleCards] = useState(services.map(service => service.cards.slice(0, 3))); // Show 3 cards from each service
  const [currentIndex, setCurrentIndex] = useState(new Array(services.length).fill(0)); // Track current index for all services
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const slideIntervals = services.map((_, serviceIndex) => {
      if (services[serviceIndex].cards.length > 3) {
        return setInterval(() => {
          slideCards(serviceIndex);
        }, 3000); // Slide every 3 seconds
      }
      return null;
    });

    return () => slideIntervals.forEach(interval => clearInterval(interval)); // Clear intervals on unmount
  }, [currentIndex]);

  const slideCards = (serviceIndex) => {
    setAnimateOut(true); // Trigger exit animation
    setTimeout(() => {
      const nextIndex = (currentIndex[serviceIndex] + 1) % services[serviceIndex].cards.length;
      const newVisibleCards = [
        services[serviceIndex].cards[nextIndex],
        services[serviceIndex].cards[(nextIndex + 1) % services[serviceIndex].cards.length],
        services[serviceIndex].cards[(nextIndex + 2) % services[serviceIndex].cards.length],
      ];

      setVisibleCards(prev => {
        const updated = [...prev];
        updated[serviceIndex] = newVisibleCards; // Update the cards for the current service
        return updated;
      });
      setCurrentIndex(prev => {
        const updated = [...prev];
        updated[serviceIndex] = nextIndex;
        return updated;
      });
      setAnimateOut(false); // Remove exit animation
      setAnimateIn(true);  // Trigger enter animation

      // Remove the enter animation after a short time
      setTimeout(() => {
        setAnimateIn(false);
      }, 500); // Duration of the slide-in animation
    }, 500); // Duration of the slide-out animation
  };

  return (
    <div>
      {services.map((service, index) => (
        <div key={index}>
          <h2 className={styles.sectionHeading}>{service.title}</h2> {/* Dynamic title for each service */}
          <div className={styles.hoverLine}></div>

          <div className={styles.cardContainer}>
            {visibleCards[index].map((card, cardIndex) => (
              <div
                key={card.id}
                className={`${styles.card} ${animateOut && service.cards.length >3 && cardIndex == 2 ? styles.slideInRight : ''} ${service.cards.length >3 && animateOut && cardIndex === 0 ? styles.slideOutLeft : ''}`}
              >
                <div className={styles.cardTitle}>{card.title}</div>
                <div className={styles.imageContainer}>
                  <img src={card.image} alt={card.title} className={styles.cardImage} />
                  <div className={styles.cardDescription}>
                    <ul>
                      {card.description
                        .split('\n') // Split description by line breaks
                        .filter(item => item.trim() !== '') // Filter out empty lines
                        .map((item, idx) => (
                          <li key={idx}>{item.replace('*', '').trim()}</li> // Render each description point
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardView;
