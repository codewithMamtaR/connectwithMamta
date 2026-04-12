import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  NavMenu  from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import List from './pages/List';
import Review from './pages/Review';
import Contact from './pages/contact';
import { Box, Typography } from '@mui/material';

//The following code will display navigation bar,main content and footer on all four pages.
// Maincontent of Box with style expression sx , changes according to url
//Navmenu is a custom component
 
function App() {
  return (
    //Routes will render component according to the path
    <BrowserRouter>
        <NavMenu />   
        <Box sx={{padding: '2rem' , minHeight: '100vh'}}>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/review" element={<Review />} />
              <Route path="/list" element={<List />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        
        <Box  component="footer"
              sx={{
                      py: 2,
                      textAlign: 'center',
                      bgcolor: '#f5f5f5',
                      position: 'fixed',
                      width: '100%',
                      bottom: 0,
           }}
         >
                      <Typography variant="body2">&copy; built by Mamta</Typography>
         </Box>
         
    </BrowserRouter>

  );
}
export default App;
