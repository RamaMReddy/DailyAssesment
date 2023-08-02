import React from 'react'
import { Box,Typography } from '@mui/material';
import Navigation from './navigationbar';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Footer from './footer';

function Contact() {
  return (
    <div>
          <Navigation/>
        <Box  paddingTop={40} sx={{backgroundColor:'orange', textAlign:'center',
           backgroundImage:"url(banner-about.jpg)",
           backgroundRepeat:'no-repeat',
           backgroundSize:'cover',
          
          
       }}>
             <Typography variant='h1' position={'absolute'} top={'7%'} left={'35%'}><p>Contact Us</p></Typography>
        </Box>
       <Box maxWidth={800} textAlign={'center'} 
         alignItems={'center'} 
         justifyContent={'center'}
         margin={'auto'}
         marginTop={5}
         padding={3}
         boxShadow={'5px 5px 20px black'}
         borderRadius={5}
       
        backgroundColor={'white'}
        display={'flex'}
    >
        <Box>
        
         <Typography variant='h5'> <FmdGoodIcon/> Address</Typography>
           <Box>
              <Typography color={'GrayText'}>Kurnool Branch</Typography>
                <Typography>Near Busstand, Ashok Nagar,Kurnool,518466.</Typography>
              <Typography color={'GrayText'}>Tirupathi Branch</Typography>
              <Typography>Near DBR Hospital, K.T.Road,Tirupathi,517501.</Typography>
           </Box><br></br><br></br>
         <Typography variant='h5'> <PhoneIcon/> Phone</Typography>
           <Typography color={'GrayText'}>+91 8074008877</Typography>
           <Typography color={'GrayText'}>+91 9515461257</Typography><br></br><br></br>
         <Typography variant='h5'> <MailIcon/> Email</Typography>
         <Typography color={'GrayText'}>pemaramashok87277@gmail.com</Typography>
         <Typography color={'GrayText'}>firegun679@gmail.com</Typography>
         </Box>
         <Box marginLeft={15}> 
         <Typography><u>We are also on Social Media</u></Typography>
          <ul className='cont-list'>
            <li id='as'><LinkedInIcon/></li>
            <li><FacebookIcon/></li>
            <li><InstagramIcon/></li>
            <li><YouTubeIcon/></li>
          </ul>
       </Box>
       </Box>
      <Footer/>
    </div>
  )
}

export default Contact