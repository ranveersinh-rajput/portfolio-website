import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with React and Node.js that helps users manage their tasks efficiently.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/yourusername/project-one',
      live: 'https://project-one-demo.com',
    },
    {
      title: 'Project Two',
      description: 'An e-commerce platform with real-time inventory management and payment processing.',
      technologies: ['React', 'Redux', 'Firebase', 'Stripe'],
      github: 'https://github.com/yourusername/project-two',
      live: 'https://project-two-demo.com',
    },
    {
      title: 'Project Three',
      description: 'A data visualization dashboard that displays real-time analytics and insights.',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      github: 'https://github.com/yourusername/project-three',
      live: 'https://project-three-demo.com',
    },
  ];

  return (
    <Box id="projects" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Projects
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.technologies.map((tech, i) => (
                        <Chip key={i} label={tech} size="small" />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </Button>
                    <Button
                      startIcon={<LaunchIcon />}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Projects; 