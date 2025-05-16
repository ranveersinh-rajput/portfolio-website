import React from 'react';
import { Box, Typography, Grid, Paper, Link, IconButton, styled, useTheme, useMediaQuery } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Instagram gradient styled button
const InstagramIconButton = styled(IconButton)({
  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
  '&:hover': {
    background: 'linear-gradient(45deg, #bc1888 0%, #cc2366 25%, #dc2743 50%, #e6683c 75%, #f09433 100%)',
  },
  '& .MuiSvgIcon-root': {
    color: 'white',
  },
});

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const contactInfo = {
    email: 'ranveersinhrajput18@gmail.com',
    phone: '7990246400',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/ranveersinh-rajput',
    instagram: 'https://instagram.com/ranveersinh_48',
    whatsapp: '7990246400',
  };

  const whatsappLink = `https://wa.me/91${contactInfo.whatsapp}?text=hey`;

  return (
    <Box id="contact" sx={{ py: { xs: 4, sm: 8 } }}>
      <Typography 
        variant={isMobile ? "h4" : "h3"} 
        component="h2" 
        gutterBottom 
        align="center"
        sx={{ mb: { xs: 3, sm: 4 } }}
      >
        Contact Me
      </Typography>
      <Paper 
        elevation={3} 
        sx={{ 
          p: { xs: 2, sm: 4 }, 
          maxWidth: '800px', 
          mx: 'auto', 
          mt: { xs: 2, sm: 4 } 
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 4 }} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'column' },
              gap: { xs: 2, sm: 2 }
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                wordBreak: 'break-word'
              }}>
                <EmailIcon sx={{ mr: 2, color: '#EA4335' }} />
                <Link 
                  href={`mailto:${contactInfo.email}`} 
                  color="inherit" 
                  underline="hover"
                  sx={{ 
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    wordBreak: 'break-word'
                  }}
                >
                  {contactInfo.email}
                </Link>
              </Box>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center'
              }}>
                <PhoneIcon sx={{ mr: 2, color: '#34A853' }} />
                <Link 
                  href={`tel:${contactInfo.phone}`} 
                  color="inherit" 
                  underline="hover"
                  sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
                >
                  {contactInfo.phone}
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: { xs: 1, sm: 2 },
              mt: { xs: 2, sm: 0 }
            }}>
              <IconButton
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  bgcolor: '#0A66C2',
                  '&:hover': { bgcolor: '#004182' },
                  '& .MuiSvgIcon-root': { color: 'white' },
                  padding: { xs: '8px', sm: '12px' }
                }}
                size={isMobile ? "medium" : "large"}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  bgcolor: '#171515',
                  '&:hover': { bgcolor: '#2b2b2b' },
                  '& .MuiSvgIcon-root': { color: 'white' },
                  padding: { xs: '8px', sm: '12px' }
                }}
                size={isMobile ? "medium" : "large"}
              >
                <GitHubIcon />
              </IconButton>
              <InstagramIconButton
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                size={isMobile ? "medium" : "large"}
                sx={{ padding: { xs: '8px', sm: '12px' } }}
              >
                <InstagramIcon />
              </InstagramIconButton>
              <IconButton
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  bgcolor: '#25D366',
                  '&:hover': { bgcolor: '#128C7E' },
                  '& .MuiSvgIcon-root': { color: 'white' },
                  padding: { xs: '8px', sm: '12px' }
                }}
                size={isMobile ? "medium" : "large"}
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Typography 
          variant="body1" 
          align="center" 
          sx={{ 
            mt: { xs: 3, sm: 4 },
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Contact; 