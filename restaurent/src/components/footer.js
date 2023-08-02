import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import './navigationbar.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div>
       <Box sx={{backgroundColor:'gray'}} height={200} display={'flex'}>
        <Box paddingTop={5}>
          <ul className='nav-menu-foot'>
              <li><u>Links</u></li>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/menu'>Menu</Link></li>
               <li><Link to='/about'>About</Link></li>
               <li><Link to='/contact'>Contact</Link></li>
               </ul>
        </Box>
        <Box>
           
        <ul className='cont-list-foot'>
            <li><LinkedInIcon sx={{fontSize:'40px'}}></LinkedInIcon></li>
            <li><FacebookIcon sx={{fontSize:'40px'}}/></li>
            <li><InstagramIcon sx={{fontSize:'40px'}}/></li>
            <li><YouTubeIcon sx={{fontSize:'40px'}}/></li>
          </ul>
        </Box>

        <Box marginLeft={20} marginTop={5} >
            <Typography>Feedback:</Typography>
            <TextField placeholder='Write Something' type='text' fullWidth></TextField>
            <Button color='primary' variant='contained' fullWidth>submit</Button>
        </Box>
        </Box> 
        <Box height={40} sx={{backgroundColor:'black', color:'white',textAlign:'center'}}> 
        <Typography variant='h6'>Copyright &copy; 2023</Typography>
        </Box>
    </div>
  )
}

export default Footer