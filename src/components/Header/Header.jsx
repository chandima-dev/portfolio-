import { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';
import { FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaClock, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null); // Create a ref for the navbar

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    // Close the menu if the click is outside the navbar
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the navbar
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.contactInfo}>
          <span><FaPhone /> (+94) 70 590 1816</span>
          <span><FaEnvelope /> info@chalk.com</span>
          <span><FaClock /> Mon - Fri: 8:00 - 17:30</span>
        </div>
      </div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span>Falcon Engineering</span>
        </div>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          {isOpen ? (
            <div className={styles.closeButton}>
              <FaTimes />
            </div>
          ) : (
            <div className={styles.openButton}>
              <FaBars />
            </div>
          )}
        </div>
        <div className={`${styles.navbar} ${isOpen ? styles.navOpen : ''}`} ref={navbarRef}>
          <ul>
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/aboutus" onClick={handleLinkClick}>About Us</Link></li>
            <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
            <li><Link to="/contactus" onClick={handleLinkClick}>Contact Us</Link></li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </header>
    </div>
  );
};

export default Header;
