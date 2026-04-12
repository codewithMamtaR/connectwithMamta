import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {AppBar,Toolbar, Box,IconButton,Button,Typography, useMediaQuery,Drawer,List,ListItem, 
ListItemText} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

const navStyle = ({ isActive }) => ({
  margin: '0.5rem 0',
  padding: '0.5rem 1.5rem',
  borderRadius: '999px',
  backgroundColor: isActive ? '#333B54' : 'transparent',
  color: isActive ? 'white' : 'black',
  textDecoration: 'none',
  display: 'inline-block',
});

const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(true);//showMenu is true to begin with
  const [lastScrollY, setLastScrollY] = useState(0);//lastScrollY is 0 
  const [drawerOpen, setDrawerOpen] = useState(false);//drawerOpen is false
  const theme = useTheme(); {/*hook that gives access to current theme obj*/ }
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); {/*is true for mobile else false */ }
  //below is a hook which will show menu if user scrolls up and hides if scroll down.it will trigger handlescroll everytime user scrolls

  useEffect(() => {
      const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowMenu(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = (
    <>
      <NavLink to="/" style={navStyle}>Home</NavLink>
      <NavLink to="/about" style={navStyle}>About</NavLink>
      <NavLink to="/review" style={navStyle}>Reviews</NavLink>
      <NavLink to="/list" style={navStyle}>Students</NavLink>
      <NavLink to="/contact" style={navStyle}>Contact</NavLink>
    </>
  );

  return (
    <>
      <AppBar position="fixed"
        sx={{top: showMenu ? 0 : '-64px', transition: 'top 0.3s ease-in-out', 
            backgroundColor: 'white',boxShadow: 3, }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* Left - Name and Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{fontFamily: 'Fake Serif, sans-serif',
                fontSize: { xs: '24px', sm: '32px', md: '48px' },
                wordSpacing: { xs: '12px', sm: '4px', md: '0px' },
                letterSpacing: { xs: '1.5px', sm: '0.5px', md: '0px' }, color: 'black',
                whiteSpace: 'nowrap',
              }}>
              Learn with Mamta
            </Typography>
            {/* For larger screens Laptops and desktops */}
            {!isMobile && (
              <>
                
              </>
            )}
          </Box>

          {/* Right - NavLinks or Menu  for small screens like mobiles*/}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isMobile ? ( <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>)
               : (<Box sx={{ display: 'flex', gap: 2 }}>{navLinks}</Box>)}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer  anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          {/*making a list to show in mobile mode */}
          <List>
            {['Home', 'About', 'Reviews', 'Students','Contact'].map((text) => (
              <ListItem button key={text} component={NavLink} style={navStyle} to={`/${text.toLowerCase()}`} onClick={() => setDrawerOpen(false)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
                        </List>
        </Box>
      </Drawer>
    </>
  );
};
export default NavMenu;