import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomServices.module.css';
import cardsData from './HomeServicesDta'; // Adjust the path as needed

const CardComponent = () => {
    const navigate = useNavigate();
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.animate); // Add the 'animate' class
                }
            });
        });

        cardRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            cardRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    const handleCardClick = () => {
        navigate('./services');
    };

    return (
        <div className={styles.outerContainer}>
            <h1 className={styles.mainTitle}>Our Services</h1>
            <div className={styles.cardContainer}>
                {cardsData.map((card, index) => (
                    <div
                        className={styles.card}
                        key={index}
                        onClick={handleCardClick}
                        ref={(el) => (cardRefs.current[index] = el)}
                    >
                        <img src={card.icon} alt={`Icon for ${card.title}`} className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardDescription}>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardComponent;
