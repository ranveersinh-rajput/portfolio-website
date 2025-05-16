import React from 'react';
import { Box, Typography, Paper, Grid, Divider, Chip, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Training and education data
  const training = [
    {
      title: 'COPA (Computer Operator and Programming Assistant)',
      institution: 'ITI',
      period: '12 Months',
      description: [
        'Comprehensive training in computer operations and programming',
        'Learned various automation tools and programming concepts',
        'Hands-on experience with computer hardware and software',
        'Developed skills in office automation and system administration',
      ],
      skills: ['Programming', 'Computer Operations', 'Automation Tools', 'System Administration'],
    },
    {
      title: 'Course on Computer Concepts (CCC)',
      institution: 'Training Center',
      period: '1 Months',
      description: [
        'Mastered essential office tools and productivity software',
        'Learned internet fundamentals and web browsing',
        'Gained proficiency in digital communication tools',
        'Understanding of basic computer concepts and operations',
      ],
      skills: ['MS Office', 'Internet Basics', 'Digital Communication', 'Computer Fundamentals'],
    },
  ];

  // Work experience data
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Company Name',
      period: '2020 - Present',
      description: [
        'Led development of key features resulting in 30% increase in user engagement',
        'Collaborated with cross-functional teams to deliver high-quality solutions',
        'Implemented best practices and coding standards across the team',
      ],
    },
  ];

  return (
    <Box id="experience" sx={{ py: { xs: 4, sm: 8 } }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          component="h2" 
          gutterBottom 
          align="center"
          sx={{ mb: { xs: 3, sm: 4 } }}
        >
          Experience & Training
        </Typography>

        {/* Training Section */}
        <Box sx={{ mb: { xs: 4, sm: 6 } }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: { xs: 2, sm: 4 },
            px: { xs: 2, sm: 0 }
          }}>
            <SchoolIcon sx={{ 
              fontSize: { xs: 24, sm: 30 }, 
              color: 'primary.main', 
              mr: 2 
            }} />
            <Typography 
              variant={isMobile ? "h5" : "h4"} 
              component="h3"
            >
              Education & Training
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 2, sm: 4 }}>
            {training.map((item, index) => (
              <Grid item xs={12} key={index}>
                {/* Animation for each training card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                >
                  <Paper 
                    elevation={3} 
                    sx={{ 
                      p: { xs: 2, sm: 4 },
                      background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                      borderLeft: '4px solid',
                      borderColor: 'primary.main',
                    }}
                  >
                    {/* Training Title */}
                    <Typography 
                      variant={isMobile ? "h6" : "h5"} 
                      component="h3" 
                      gutterBottom 
                      color="primary.main"
                      sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem' } }}
                    >
                      {item.title}
                    </Typography>
                    {/* Institution Name */}
                    <Typography 
                      variant="h6" 
                      color="text.secondary" 
                      gutterBottom
                      sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                    >
                      {item.institution}
                    </Typography>
                    {/* Duration */}
                    <Typography 
                      variant="subtitle1" 
                      color="text.secondary" 
                      gutterBottom
                      sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                    >
                      Duration: {item.period}
                    </Typography>
                    {/* Description List */}
                    <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                      {item.description.map((desc, i) => (
                        <Typography 
                          component="li" 
                          key={i} 
                          paragraph
                          sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                        >
                          {desc}
                        </Typography>
                      ))}
                    </Box>
                    {/* Skills Chips */}
                    <Box sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: { xs: 0.5, sm: 1 } 
                    }}>
                      {item.skills.map((skill, i) => (
                        <Chip
                          key={i}
                          label={skill}
                          size={isMobile ? "small" : "medium"}
                          sx={{ 
                            bgcolor: 'rgba(33, 150, 243, 0.1)',
                            color: 'primary.main',
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            mb: 0.5
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Work Experience Section */}
        {experiences.length > 0 && (
          <Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: { xs: 2, sm: 4 },
              px: { xs: 2, sm: 0 }
            }}>
              <WorkIcon sx={{ 
                fontSize: { xs: 24, sm: 30 }, 
                color: 'primary.main', 
                mr: 2 
              }} />
              <Typography 
                variant={isMobile ? "h5" : "h4"} 
                component="h3"
              >
                Work Experience
              </Typography>
            </Box>
            <Grid container spacing={{ xs: 2, sm: 4 }}>
              {experiences.map((exp, index) => (
                <Grid item xs={12} key={index}>
                  {/* Animation for each work experience card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                  >
                    <Paper 
                      elevation={3} 
                      sx={{ 
                        p: { xs: 2, sm: 4 },
                        background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                        borderLeft: '4px solid',
                        borderColor: 'secondary.main',
                      }}
                    >
                      {/* Job Title */}
                      <Typography 
                        variant={isMobile ? "h6" : "h5"} 
                        component="h3" 
                        gutterBottom 
                        color="secondary.main"
                        sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem' } }}
                      >
                        {exp.title}
                      </Typography>
                      {/* Company Name */}
                      <Typography 
                        variant="h6" 
                        color="text.secondary" 
                        gutterBottom
                        sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                      >
                        {exp.company}
                      </Typography>
                      {/* Period */}
                      <Typography 
                        variant="subtitle1" 
                        color="text.secondary" 
                        gutterBottom
                        sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                      >
                        {exp.period}
                      </Typography>
                      {/* Description List */}
                      <Box component="ul" sx={{ pl: 2 }}>
                        {exp.description.map((item, i) => (
                          <Typography 
                            component="li" 
                            key={i} 
                            paragraph
                            sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                          >
                            {item}
                          </Typography>
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </motion.div>
    </Box>
  );
};

export default Experience; 