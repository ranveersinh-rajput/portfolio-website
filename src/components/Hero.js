import React from 'react';
import { Box, Typography, Button, Avatar, useTheme, useMediaQuery } from '@mui/material';
import ScrollLink from './ScrollLink';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ProfileFlipCard from './ProfileFlipCard';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    // Main container for the hero section
    <Box
      sx={{
        minHeight: { xs: 'calc(100vh - 56px)', sm: '80vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        py: { xs: 4, sm: 8 },
        px: { xs: 2, sm: 3 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Avatar */}
        <Box sx={{ mb: 3 }}>
          <ProfileFlipCard
            frontImage="/Ranveersinh.png"
            backImage="/Ranveersinh-back.png" // Replace with your back image path
            size={isMobile ? 120 : 140}
          />
        </Box>
        {/* Main Heading */}
        <Typography 
          variant={isMobile ? "h3" : "h2"} 
          component="h1" 
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' },
            fontWeight: 'bold',
          }}
        >
          Hi, I'm Ranveersinh Rajput
        </Typography>
        {/* Typing Animation for Roles */}
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          color="text.secondary" 
          paragraph
          sx={{ mb: 2 }}
        >
          <TypeAnimation
            sequence={[
              'Software Developer',
              1000,
              'Problem Solver',
              1000,
              'Tech Enthusiast',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </Typography>
        {/* Short Description */}
        <Typography 
          variant="body1" 
          color="text.secondary" 
          paragraph 
          sx={{ 
            maxWidth: '600px', 
            mb: 4,
            mx: 'auto',
            px: { xs: 2, sm: 0 },
            fontSize: { xs: '1rem', sm: '1.1rem' },
          }}
        >
          I'm passionate about creating efficient, scalable, and user-friendly solutions.
          With expertise in modern web technologies, I strive to build applications that make a difference.
        </Typography>
        {/* Button to scroll to Contact section */}
        <Button
          component={ScrollLink}
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          variant="contained"
          size={isMobile ? "medium" : "large"}
          sx={{ mt: 2, fontWeight: 'bold', fontSize: isMobile ? '1rem' : '1.1rem' }}
        >
          Get in Touch
        </Button>
      </motion.div>
    </Box>
  );
};

export default Hero; 