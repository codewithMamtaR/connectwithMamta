import React from 'react';
import {  Typography, Box } from '@mui/material';


export default function Review() {
  



  return (
    <>
      

      <Box
                  sx={{
                    overflow:'hidden',
                        position: 'relative',
                        minHeight:'100vh',
                    
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
                   '&::before': {
                    content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: '100%',
                      
                      zIndex: 1,
                    },
                    zIndex:0,
                      
                  }}
                >
      <Box>
         <Typography variant='h2' sx={{fontFamily: "'Tangerine', cursive" , mb:3, zIndex:2,position:'relative' }}>Students' Testimonials</Typography>
      </Box>
      

      <Box  sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center',zIndex:2,position:'relative' }}>
      
             <iframe  width="315" height="391" src="https://www.youtube.com/embed/jEFYv9-OBbc" title="Student testimonial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
              <iframe  width="315" height="391" src="https://www.youtube.com/embed/BXTI0GsCdRg" title="Student testimonial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="315" height="391" src="https://www.youtube.com/embed/eAyl5VELXHI" title="My foreign student willis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 <iframe width="315" height="391" src="https://www.youtube.com/embed/bHQ4kq1ywpE" title="SK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 <iframe width="315" height="576" src="https://www.youtube.com/embed/qwg_A9MPkJA" title="April 13, 2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 <iframe width="315" height="576" src="https://www.youtube.com/embed/ClZDR5H__UU" title="April 13, 2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
 <iframe width="315" height="576" src="https://www.youtube.com/embed/PV7wPB17Bvg" title="April 13, 2026" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </Box>


</Box>


     
          </>
        );
      }
