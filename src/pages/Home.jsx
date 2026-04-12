import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Container, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

export default function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
     
      <Box
        sx={{
          position: 'relative',
          overflow:'hidden',
          height:'100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 2,
          py: 4,
        
        }}
      > <Box
      sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        py: 2,
      }}
    >
      <Box
        component="div"
        sx={{
          display: 'inline-block',
          animation: 'scrollText 15s linear infinite',
          '@keyframes scrollText': {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        }}
      >
        
        
            <Typography
            variant="h3"
            sx={{
             color:'black',
              p: 2,
              borderRadius: 2,
              fontFamily: "'Tangerine', cursive",
            }}
          >
            "From Basics to Brilliance — Learn Coding with Confidence!"
          </Typography>
      
</Box>
</Box>
  <Box sx={{ minHeight: '100vh', width:'100%',justifyContent:'center',alignItems:'center',display:'flex'}}>
   <Box>     
        <Typography  sx={{fontFamily:"'Tangerine',cursive",color:'black' }}  variant="h4" gutterBottom>
          Courses Offered:
        </Typography>
        <List >
          <ListItem>
            <ListItemText variant='h3' sx={{fontFamily:"'Tangerine',cursive",color:'black'}}
              primary={<span>11<sup>th</sup> and 12<sup>th</sup></span>}
              secondary={
                <>
                  <List component="div" disablePadding sx={{ pl: 4 }}>
                  
                    <ListItem sx={{color:'black'}}   > Computer Science State</ListItem>
                    <ListItem sx={{color:'black'}}>
                      Computer Science CBSE
                      <List component="div" disablePadding sx={{ pl: 4 }}>
                        <ListItem sx={{color:'black'}}>C++</ListItem>
                        <ListItem sx={{color:'black'}}>Python</ListItem>
                      </List>
                    </ListItem>
                  </List>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText sx={{fontFamily:"fantasy",color:'black'}}
              primary="Engineering"
              secondary={
                <List component="div" disablePadding sx={{ pl: 4 }}>
                  <ListItem sx={{color:'black'}}>C++</ListItem>
                  <ListItem sx={{color:'black'}}>Python</ListItem>
                </List>
              }
            />
          </ListItem>
        </List>
        
        

        
          <Typography variant="h6"  sx={{color:'black'}}>Mode of Learning: Online and In-person</Typography>
          <Typography variant="h6" gutterBottom>Contact me:</Typography>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/mamta-r-965032165"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            aria-label="LinkedIn" 
          >
            <LinkedInIcon sx={{}} />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:mamtarathore161344@gmail.com"
            color="primary"
            aria-label="Email"
          >
            <EmailIcon sx={{}} />
          </IconButton>
        </Box>       
      </Box>
</Box>
    </>
  );
}
    