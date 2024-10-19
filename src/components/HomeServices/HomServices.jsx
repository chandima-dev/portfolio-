import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomServices.module.css';
import cardsData from './HomeServicesDta'; // Adjust the path as needed

const CardComponent = () => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('./services');
    };

    return (
        <div className={styles.outerContainer}>
            <div className={styles.cardContainer}>
                {cardsData.map((card, index) => (
                    <div className={styles.card} key={index} onClick={handleCardClick}>
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
