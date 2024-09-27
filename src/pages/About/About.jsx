// AboutUs.js
import React from 'react';
import SubSlider from '../../components/SubSlider/SubSlider';

const AboutUs = () => {
  const customStyles = {
    textStyle: {
    //   top: '90%', // Adjust position as needed
    //   left: '80%', // Center horizontally
    //   transform: 'translate(-50%, -50%)', // Adjust for centering
    },
    paraStyle: {
    //   left: '100%', // Adjust position as needed
    //   bottom: '10%', // Adjust position as needed
    //   transform: 'translateX(-50%)', // Adjust for centering
    },
  };

  return (
    <div>
      <SubSlider 
        title="Who Are We" 
        description="We are Structural Engineering Consultants." 
        customStyles={customStyles}
      />
      {/* Other about us page content */}
    </div>
  );
};

export default AboutUs;
