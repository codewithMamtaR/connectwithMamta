import React from 'react';
import {  Card, CardContent, CardMedia, Typography, IconButton, Box, Container, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { SiCplusplus, SiPython } from "react-icons/si";
import TerminalIcon from '@mui/icons-material/Terminal';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SchoolIcon from '@mui/icons-material/School';

import { Link } from 'react-router-dom';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import MemoryIcon from '@mui/icons-material/Memory';
export default function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
     
      <Box sx={{
          position: 'relative',overflow:'hidden',height:'100%',backgroundSize: 'cover',
          backgroundPosition: 'center',color: '#fff',display: 'flex',flexDirection: 'column',
          justifyContent: 'center',alignItems: 'center',textAlign: 'center',px: 2,py: 4,
          }}
      > 
      <Box sx={{overflow: 'hidden', whiteSpace: 'nowrap',width: '100%',py: 2, }}>
      <Box component="div"sx={{display: 'inline-block',
          animation: 'scrollText 15s linear infinite',
          '@keyframes scrollText': {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        }}
      ><Typography
            variant="h3" sx={{  color:'black', p: 2,borderRadius: 2,fontFamily: "'Tangerine', cursive",  }}
          >
            "From Basics to Brilliance — Learn Coding with Confidence!"
          </Typography>
      
</Box>
</Box>

<Box
  sx={{
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    px: 2,
    py: 4,
    backgroundColor: '#f5f5f5'
  }}
>
  <Box sx={{ maxWidth: 900, width: '100%' }}>

    {/* Heading */}
    <Typography
      variant="h3"
      sx={{
        fontFamily: "'Tangerine', cursive",
        textAlign: 'center',
        mb: 4,
        color: '#333'
      }}
    >
      Courses Offered
    </Typography>

    {/* Cards */}
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3,
        justifyContent: 'center'
      }}
    >

      {/* Card 1 */}
      <Card sx={{ width: { xs: '100%', sm: '45%' }, p: 2, borderRadius: 3, boxShadow: 2 }}>
        <CardContent>

          <Typography variant="h5" sx={{fontFamily: "'Quicksand', sans-serif", fontWeight: 'bold', mb: 2 }}>
            Class XI & XII (Science Stream)
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <SchoolIcon sx={{ mr: 1, color: '#4a0360' }} />
            <Typography>Computer Science (State Board)</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <SchoolIcon sx={{ mr: 1, color: '#4a0360' }} />
            <Typography>Computer Science (CBSE)</Typography>
          </Box>
          <Box sx={{ ml: 4, mt: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SiCplusplus size={24} color="#4a6fa5" style={{ marginRight: '8px' }} />
              <Typography>C++</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SiPython size={24} color="#6b8e23" style={{ marginRight: '8px' }} />
              <Typography>Python</Typography>
            </Box>
          </Box>
</Box>
        </CardContent>
      </Card>

      {/* Card 2 */}
      <Card sx={{ width: { xs: '100%', sm: '45%' }, p: 2, borderRadius: 3, boxShadow: 2 }}>
        <CardContent>

          <Typography variant="h5" sx={{fontFamily: "'Quicksand', sans-serif", fontWeight: 'bold', mb: 2 }}>
            Engineering Courses
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SiCplusplus size={24} color="#4a6fa5" style={{ marginRight: '8px' }} />
            <Typography>C++</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <SiPython size={24} color="#6b8e23" style={{ marginRight: '8px' }} />
             <Typography>Python</Typography>
          </Box>

        </CardContent>
      </Card>

    </Box>

    {/* Footer */}
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h6" sx={{ color: '#444' }}>
        Mode: Online & In-person
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 ,color:'black'}}>
        Contact Me
      </Typography>

      <IconButton
        component="a"
        href="https://www.linkedin.com/in/mamta-r-965032165"
        target="_blank"
        color="primary"
      >
        <LinkedInIcon />
      </IconButton>

      <IconButton
        component="a"
        href="mailto:mamtarathore161344@gmail.com"
        color="primary"
      >
        <EmailIcon />
      </IconButton>
    </Box>

  </Box>
</Box>








 
</Box>
    </>
  );
}
    