import React, { useEffect, useState, useRef } from 'react';
import styles from './HomeProjects.module.css'; // Import your CSS module
import { cards } from './HomeProjectsData'; // Import the card data

const CardView = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleHeadings, setVisibleHeadings] = useState(false);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger animation when 10% of the element is visible
    };

    // Observer for headings
    const headingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleHeadings(true);
          headingObserver.disconnect();
        }
      });
    }, observerOptions);

    // Observer for cards
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Adding a delay for each card to load one by one
          const index = Number(entry.target.dataset.index);
          setTimeout(() => {
            setVisibleCards((prev) => [...prev, index]);
          }, index * 450); // Adjust timing for one-by-one loading
        }
      });
    }, observerOptions);

    if (headingRef.current) {
      headingObserver.observe(headingRef.current);
    }

    if (cardsRef.current) {
      Array.from(cardsRef.current.children).forEach((card, index) => {
        cardObserver.observe(card);
        card.setAttribute('data-index', index);
      });
    }

    return () => {
      headingObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <div>
      {/* Heading and Subheading with animation */}
      <div ref={headingRef} className={`${styles.headings} ${visibleHeadings ? styles.show : ''}`}>
        <h1>Discover Our Recent Work</h1>
        <p>Explore the newest projects designed for success.</p>
      </div>

      {/* Card Container */}
      <div ref={cardsRef} className={styles.cardContainer}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${visibleCards.includes(index) ? styles.show : styles.hide}`}
          >
            <img src={card.imageUrl} alt={card.title} />
            <div className={styles.overlay}>
              <h3>{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardView;
