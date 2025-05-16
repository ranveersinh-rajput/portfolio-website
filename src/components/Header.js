import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import ScrollLink from './ScrollLink';
import { motion } from 'framer-motion';

const Header = () => {
  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <AppBar position="sticky" color="default" elevation={1} component={motion.div}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              component={ScrollLink}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              sx={{
                mx: 1,
                position: 'relative',
                fontWeight: 600,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                color: 'text.primary',
                '&:after': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  left: 0,
                  bottom: 4,
                  width: 0,
                  height: '3px',
                  bgcolor: 'primary.main',
                  borderRadius: 2,
                  transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1)',
                },
                '&:hover:after, &[aria-current="true"]:after': {
                  width: '100%',
                },
                '&:hover': {
                  color: 'primary.main',
                  background: 'transparent',
                },
              }}
              activeClass="active"
              aria-current="true"
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 