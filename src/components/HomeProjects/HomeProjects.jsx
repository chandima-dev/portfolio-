import React, { useEffect, useState } from 'react';
import styles from './HomeProjects.module.css'; // Import your CSS module

const CardView = () => {
  const cards = [
    {
      title: 'Exterior and Interior Renderings',
      imageUrl: '/images/SingleProducts/Architectural Design/423 ERIE AVENUE/White Garage_Black Door_Black window frame.png',
    },
    {
      title: 'Two-Storey Residential Unit',
      imageUrl: '/images/SingleProducts/Architectural Design/CANADIAN FARMHOUSE/MAIN IMAGE.jpg',
    },
    {
      title: 'Texas Quadplex – Country-Style Design',
      imageUrl: '/images/SingleProducts/Architectural Design/TEXAS, USA 8 ACRES/MAIN IMAGE.png',
    },
    {
      title: 'Commercial Office Design',
      imageUrl: '/images/SingleProducts/Architectural Design/PROPOSED ORMISTON/Proposed Ormiston Office,NZ Project-0062 - 3D View - 3D View 1.jpg',
    },
    {
      title: 'Texas Quadplex',
      imageUrl: '/images/SingleProducts/Architectural Design/TEL AVIV, ISRAEL/MAIN IMAGE.jpg',
    },
    {
      title: 'Two-Storey Residential Unit',
      imageUrl: '/images/SingleProducts/Architectural Design/CANADIAN FARMHOUSE/10.jpg',
    },
  ];

  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleHeadings, setVisibleHeadings] = useState(false);

  useEffect(() => {
    // Show headings first
    setTimeout(() => {
      setVisibleHeadings(true);
    }, 300);

    // Then show cards one by one
    cards.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 450);
    });
  }, []);

  return (
    <div>
      {/* Heading and Subheading with animation */}
      <div className={`${styles.headings} ${visibleHeadings ? styles.show : styles.hide}`}>
        <h1>Discover Our Recent Work</h1>
        <p>Explore the newest projects designed for success.</p>
      </div>

      {/* Card Container */}
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <div
            className={`${styles.card} ${visibleCards.includes(index) ? styles.show : styles.hide}`}
            key={index}
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
