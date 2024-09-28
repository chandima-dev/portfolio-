import React, { useEffect, useRef } from 'react';
import styles from './About.module.css'; // Import CSS module
import SubSlider from '../../components/SubSlider/SubSlider';

const AboutUs = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const teamTitleRef = useRef(null);
  const teamMembersRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const images = imageRef.current.children;
      const textElement = textRef.current;
      const titleElement = teamTitleRef.current;

      // Check if the text element is in the viewport
      if (textElement.getBoundingClientRect().top < window.innerHeight) {
        textElement.classList.add(styles.fadeIn);
      }

      // Check if images are in the viewport
      for (let image of images) {
        if (image.getBoundingClientRect().top < window.innerHeight) {
          image.classList.add(styles.slideInLeft);
        }
      }

      // Check if team title is in the viewport
      if (titleElement.getBoundingClientRect().top < window.innerHeight) {
        titleElement.classList.add(styles.fadeIn);
      }

      // Check if team members are in the viewport
      teamMembersRef.current.forEach(member => {
        if (member.getBoundingClientRect().top < window.innerHeight) {
          member.classList.add(styles.slideInUp);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Team member details
  const teamMembers = [
    {
      name: 'Chandima Sooriyaarachchi',
      role: 'Managing Director',
      position: 'Senior Structural Engineer',
      education: 'BSc Hons Civil Engineering',
      credentials: 'AMIE (SL), A. Eng (ECSL), AMSSE (SL)',
      image: '/images/profile/avator.jpg', // Use different images for different members
    },
    {
      name: 'Sulochana Sooriyaarachchi',
      role: 'Technical Director',
      position: 'Structural Engineer',
      education: 'BSc Civil Engineering',
      credentials: 'MIE (SL), C. Eng (ECSL)',
      image: '/images/profile/avator.jpg', // Use different images for different members
    },
  ];

  return (
    <div>
      <SubSlider 
        title="Who We Are" 
        description="We are Structural Engineering Consultants" 
      />
      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUsContent}>
          <div className={styles.aboutUsImages} ref={imageRef}>
            <div className={`${styles.imageSquare} ${styles.largeImage}`}>
              <img 
                src="/images/aboutUs/about1.jpeg" 
                alt="Falcon Engineering" 
              />
            </div>
            <div className={styles.imageSquare}>
              <img src="/images/aboutUs/about2.jpeg" alt="Falcon Engineering 2" />
            </div>
            <div className={styles.imageSquare}>
              <img src="/images/aboutUs/about3.jpeg" alt="Falcon Engineering 3" />
            </div>
          </div>
          <div className={styles.aboutUsText} ref={textRef}>
            <h2>Our core values are</h2>
            <p>
              At <span className={styles.boldText}>Falcon Engineering</span>, we bring together a diverse team of professionals passionate about pushing the boundaries of architectural and engineering design. With years of experience in the AEC industry, we pride ourselves on delivering bespoke services tailored to meet the unique needs of every client. Our commitment to excellence and innovation ensures that each project is handled with the utmost precision and care.
            </p>
          </div>
        </div>
      </div>

      {/* New Section for Falcon Engineering Team */}
      <h2 className={styles.seTeamTitle} ref={teamTitleRef}>Falcon Engineering Team</h2>
      <div className={styles.seTeamContainer}>
        {teamMembers.map((member, index) => (
          <div className={styles.seTeamMember} ref={el => teamMembersRef.current[index] = el} key={index}>
            <img 
              src={member.image} 
              alt={member.name} 
              className={styles.seTeamImage}
            />
            <h3>{member.name}</h3>
            <p>{member.role},</p>
            <p>{member.position}</p>
            <p>{member.education}</p>
            <p>{member.credentials}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
