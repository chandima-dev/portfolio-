import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams for URL parameters
import SubSlider from '../../components/SubSlider/SubSlider';
import styles from './SingleProject.module.css'; // Import CSS Module
import projects from './SingleProjectData'; // Adjust the path based on your structure

const SingleProject = () => {
  const { projectId } = useParams(); // Get the project ID from the URL parameters
  const project = projects.find((proj) => proj.id === parseInt(projectId)); // Retrieve the project details

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this only runs once on component mount

  if (!project) {
    return <div>Project not found</div>; // Handle case where project is not found
  }

  return (
    <>
      <SubSlider 
        title="Our Projects" 
        description="Explore our portfolio of valuable and impactful projects" 
      />
      <div className={styles.singleProjectsContainer}>
        <div className={styles.projectDetails}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
          <h4 className={styles.highlightsTitle}>Key highlights include:</h4>
          <ul className={styles.highlightsList}>
            {project.highlights.map((highlight, index) => (
              <li key={index} className={styles.highlightItem}>
                <strong className={styles.highlightTitle}>{highlight.title}:</strong>
                <span className={styles.highlightDetails}>{highlight.details}</span>
              </li>
            ))}
          </ul>   
          <p>{project.conclusion}</p>
          <div className={styles.projectImages}>
            {project.images.map((image, index) => (
              <img key={index} src={image} alt={`Project Design ${index + 1}`} className={styles.projectImage} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
