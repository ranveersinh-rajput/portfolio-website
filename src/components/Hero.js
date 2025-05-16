import React from 'react';
import { Box, Typography, Button, Avatar, useTheme, useMediaQuery } from '@mui/material';
import ScrollLink from './ScrollLink';
import { motion } from 'framer-motion';
import Typed from 'react-typed';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
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
        <Avatar
          alt="Ranveersinh Rajput"
          src="/Ranveersinh.png"
          sx={{
            width: { xs: 120, sm: 140 },
            height: { xs: 120, sm: 140 },
            mb: 3,
            mx: 'auto',
            boxShadow: 3,
          }}
        />
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
        <Typography 
          variant={isMobile ? "h5" : "h4"} 
          color="text.secondary" 
          paragraph
          sx={{ mb: 2 }}
        >
          <Typed
            strings={['Software Developer', 'Problem Solver', 'Tech Enthusiast']}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </Typography>
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
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Button
            component={ScrollLink}
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            variant="contained"
            size={isMobile ? "medium" : "large"}
            sx={{ mt: 2 }}
          >
            Get in Touch
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Hero; 