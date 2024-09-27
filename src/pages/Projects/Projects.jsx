// Projects.js
import React from 'react';
import SubSlider from '../../components/SubSlider/SubSlider';

const Projects = () => {
  const customStyles = {
    textStyle: {
    //   top: '80%', // Adjust position as needed
    //   left: '50%', // Center horizontally
    //   transform: 'translate(-50%, -50%)',
    },
    paraStyle: {
    //   left: '50%',
    //   bottom: '10%',
    //   transform: 'translateX(-50%)',
    },
  };

  return (
    <div>
      <SubSlider 
        title="Our Projects" 
        description="These are the valuable projects." 
        customStyles={customStyles}
      />
      {/* Other projects page content */}
    </div>
  );
};

export default Projects;
