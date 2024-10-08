import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import SubSlider from '../../components/SubSlider/SubSlider';
import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Fade } from 'react-awesome-reveal'; // Import the animation component
import cardData from './data'; // Import the card data from data.js

const MultiActionAreaCard = ({ image, title, delay, index }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleCardClick = () => {
    // Redirect to the SingleProject page with card index
    navigate(`/singleproject/${index + 1}`);
  };

  return (
    <Fade direction="up" delay={delay} triggerOnce>
      <Card sx={{ width: 360, my: 6 }} onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" textAlign={"center"}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Fade>
  );
};

const Projects = () => {
  return (
    <div>
      {/* SubSlider component */}
      <SubSlider 
        title="Our Projects" 
        description="Explore our portfolio of valuable and impactful projects" 
      />
      
      {/* Container for card layout */}
      <Container>
        {/* Generate the cards dynamically using map */}
        <Grid container spacing={3} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid item key={index}>
              <MultiActionAreaCard 
                image={card.image} 
                title={card.title} 
                delay={card.delay}  
                index={index}  // Pass the index to identify the card
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
