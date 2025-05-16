import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box id="about" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h2" gutterBottom align="center">
          About Me
        </Typography>
        <Paper elevation={3} sx={{ p: 4, maxWidth: '800px', mx: 'auto' }}>
          <Typography variant="body1" paragraph>
            I am a dedicated software developer with a strong foundation in web development
            and a passion for creating innovative solutions. My journey in technology has
            equipped me with expertise in both front-end and back-end development.
          </Typography>
          <Typography variant="body1" paragraph>
            With a focus on clean code and user experience, I strive to build applications
            that are not only functional but also intuitive and engaging. I'm constantly
            learning and adapting to new technologies to stay at the forefront of
            development practices.
          </Typography>
          <Typography variant="body1">
            When I'm not coding, you can find me [Your Interests/Hobbies]. I believe in
            continuous learning and am always excited to take on new challenges that
            push me to grow both professionally and personally.
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default About; 