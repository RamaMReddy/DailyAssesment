import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom';
import './navigationbar.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div>
         <Box height={100} paddingLeft={5} paddingRight={5} sx={{display:{sm:'none'}, backgroundColor:'gray',}}>
            <Typography textAlign={'center'} fontWeight={'bold'}>Feedback:</Typography>
            <TextField placeholder='Write Something' type='text' fullWidth sx={{backgroundColor:'white',borderRadius:'10px'}}></TextField>
            <Button color='primary' variant='contained' fullWidth sx={{marginTop:'5px',borderRadius:'10px'}}>submit</Button>
        </Box>
       <Box sx={{backgroundColor:'gray'}} height={200} display={'flex'}>
        <Box paddingTop={5}>
          <ul className='nav-menu-foot'>
              <li><u>Links</u></li>
               <li><NavLink to='/'>Home</NavLink></li>
               <li><NavLink to='/menu'>Menu</NavLink></li>
               <li><NavLink to='/about'>About</NavLink></li>
               <li><NavLink to='/contact'>Contact</NavLink></li>
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

        <Box marginLeft={20} marginTop={5} width={600} sx={{display:{xs:'none',sm:'block'}}}>
            <Typography textAlign={'center'} fontWeight={'bold'}>Feedback:</Typography>
            <TextField placeholder='Write Something' type='text' fullWidth sx={{backgroundColor:'white',borderRadius:'10px'}}></TextField>
            <Button color='primary' variant='contained' fullWidth sx={{marginTop:'5px',borderRadius:'10px'}}>submit</Button>
        </Box>
        </Box> 
        <Box height={40} sx={{backgroundColor:'black', color:'white',textAlign:'center'}}> 
        <Typography variant='h6'>Copyright &copy; 2023</Typography>
        </Box>
    </div>
  )
}

export default Footer