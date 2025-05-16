import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import ScrollLink from './ScrollLink';

const Header = () => {
  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <AppBar position="sticky" color="default" elevation={1}>
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
              sx={{ mx: 1 }}
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