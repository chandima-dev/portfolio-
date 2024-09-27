import styles from './Footer.module.css';  // Ensure you have the CSS module set up
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaLinkedin, FaRss } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Contact Info</h4>
          <p><FaMapMarkerAlt /> 1526/6, Crest Field Garden, Malambe Rd, Kottawa</p>
          <p><FaEnvelope /> <a href="mailto:info@chanlk.com">info@chalk.com</a></p>
          <p><FaPhone /> <a href="tel:+94705901816">+94 70 590 1816</a></p>
          <p><FaPhone /> <a href="tel:+94705901816">+94 70 590 1816</a></p>
        </div>
        <div className={styles.footerSection}>
          <h4>About Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#news">News & Blogs</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Support</h4>
          <ul>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#book">Book a Call</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4 className={styles.newsletterTitle}>Newsletter</h4>
          <p>Sign up for our newsletter to receive updates, news, and knowledge base.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Get Updates</button>
          </form>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://rss.com" aria-label="RSS"><FaRss /></a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Falcon Engineering. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
