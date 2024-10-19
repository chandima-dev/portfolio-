import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import SubSlider from '../../components/SubSlider/SubSlider';
import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Fade } from 'react-awesome-reveal'; // Import the animation component
import cardData from './ProjectData'; // Import the card data

const MultiActionAreaCard = ({ image, title, delay, index }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleCardClick = () => {
    // Redirect to the SingleProject page with card index
    navigate(`/singleproject/${index + 1}`);
  };

  return (
    <Fade direction="up" delay={delay} triggerOnce>
      <Card
        sx={{
          width: '100%', // Make card width 100% to utilize grid space
          maxWidth: 360, // Maximum width to prevent cards from being too wide
          my: 2, // Margin on the y-axis
          transition: 'transform 0.3s ease-in-out', // Smooth transition for zoom effect
          '&:hover': {
            transform: 'scale(1.05)', // Zoom in by 5% on hover
          },
        }}
        onClick={handleCardClick}
        style={{ cursor: 'pointer' }}
      >
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textAlign="center"
            dangerouslySetInnerHTML={{ __html: title }} // Render with spaces
          />
        </CardContent>
      </Card>
    </Fade>
  );
};

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      {/* SubSlider component */}
      <SubSlider
        title="Our Projects"
        description="Explore our portfolio of valuable and impactful projects"
      />

      {/* Container for card layout */}
      <Container sx={{ mt: { xs: -30, md: 10 }, mb: { xs: 4, md: 0 } }}>
        {/* Generate the cards dynamically using map */}
        <Grid container spacing={2} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid
              item
              key={index}
              xs={12}  // Full width on extra small screens (mobile)
              sm={6}   // 2 cards per row on small screens (>= 600px)
              md={4}   // 3 cards per row on medium screens (>= 960px)
              lg={4}   // 3 cards per row on large screens (>= 1280px)
            >
              <MultiActionAreaCard
                image={card.image}
                title={card.title}
                delay={index * 100}  // Adjust delay based on index for staggering effect
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
