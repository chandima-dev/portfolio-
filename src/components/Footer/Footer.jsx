import styles from './Footer.module.css';  // Ensure you have the CSS module set up
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaLinkedin, FaViber, FaRss } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  const handleLinkClick = () => {
    // Custom link click handler logic if needed
    console.log('Link clicked');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Contact Info</h4>
          <br />
          <p><FaMapMarkerAlt /> No. 121/C, Surigama, Kadawatha 11850, Sri Lanka</p>
          <p><FaEnvelope /> <a href="mailto:info@falcondesigns.com.lk">info@falcondesigns.com.lk</a></p>
          <p><FaPhone /> <a href="tel:+94728130647">+94 72 813 0647</a></p>
          <p><FaPhone /> <a href="tel:+94770155918">+94 77 015 5918</a></p>
        </div>

        <div className={styles.footerSection}>
          <h4>About Company</h4>
          <ul>
            <li><Link to="/aboutus" onClick={handleLinkClick}>About Us</Link></li>
            <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
            <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Support</h4>
          <ul>
            <li><Link to="/contactus" onClick={handleLinkClick}>Help Center</Link></li>
            <li><Link to="/contactus" onClick={handleLinkClick}>FAQ</Link></li>
            <li><Link to="/contactus" onClick={handleLinkClick}>Contact Us</Link></li>
            <li><Link to="/contactus" onClick={handleLinkClick}>Book a Call</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.newsletterTitle}>Newsletter</h4>
          <br />
          <p style={{ textAlign: 'center' }}>
            Sign up for our newsletter to receive updates, news, and knowledge base.
          </p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Get Updates</button>
          </form>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://wa.me/+94705901816" aria-label="RSS"><IoLogoWhatsapp /></a>
            <a href="viber://chat?number=94705901816" aria-label="RSS"><FaViber /></a>
            <a href="imo://chat?number=94705901816" aria-label="RSS"><IoChatbubbleEllipsesOutline /></a>
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
