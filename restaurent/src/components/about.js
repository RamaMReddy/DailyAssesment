import { Box, Typography} from '@mui/material'
import React from 'react'
import Navigation from './navigationbar'
import Footer from './footer'
import './navigationbar.css'



function About() {
   
  return (
    <>
    
   
    <Navigation/>
    <Box  paddingTop={40} sx={{backgroundColor:'orange', textAlign:'center',
           backgroundImage:"url(banner-about.jpg)",
           backgroundRepeat:'no-repeat',
           backgroundSize:'cover',
          justifyContent:'center',
          alignItems:'center',
        
       }}>
          <Typography variant='h1' position={'absolute'} top={'7%'} left={'35%'}><p>About Us</p></Typography>
        </Box>
       <Box maxWidth={800} textAlign={'center'} 
         alignItems={'center'} 
         justifyContent={'center'}
         margin={'auto'}
         marginTop={5}
         padding={10}
         boxShadow={'5px 5px 20px black'}
         borderRadius={5}
       fontFamily={'inherit'}
        backgroundColor={'white'}
       
     >
        
         <Typography> At Food Court, we believe in the power of great food and warm hospitality. Nestled in the heart of , our restaurant is a culinary oasis where passion and creativity come together to create unforgettable dining experiences.<br></br>

Our Story:<br></br>
Food Court is the brainchild of Pemeram Ashok, who shared a dream of bringing diverse flavors and culinary traditions to this vibrant community. What began as a humble vision has evolved into a culinary destination cherished by locals and visitors alike. Drawing inspiration from their travels around the world and their love for food, Pemeram Ashok set out to create a dining haven that celebrates both innovation and authenticity.

Our Cuisine:<br></br>
Our kitchen is a melting pot of flavors, crafting a unique blend of traditional and contemporary dishes that cater to every palate. Our talented team of chefs carefully sources the finest and freshest ingredients to ensure that each plate is a masterpiece of taste and presentation. From sizzling steaks to indulgent pastas, delectable seafood to vegetarian delights, every dish at Food Court is a testament to our commitment to culinary excellence.

Our Ambience:<br></br>
Step into a world of comfort and elegance as you enter Food Court. Our thoughtfully designed interior combines modern aesthetics with hints of rustic charm, creating an inviting space where you can relax and savor every moment. Whether you're celebrating a special occasion, enjoying a romantic dinner, or gathering with friends and family, our warm and attentive staff will ensure that your dining experience is nothing short of exceptional.

Our Philosophy:<br></br>
At Food Court we believe that food is a universal language that brings people together. It's not just about nourishment; it's about creating memories, fostering connections, and sparking joy. With a commitment to sustainable practices and community engagement, we strive to make a positive impact on both the environment and the lives of our guests.

Join us on a culinary journey that will tantalize your taste buds and awaken your senses. We invite you to experience the magic of Food Court, where passion, flavor, and hospitality converge to create unforgettable moments. Whether it's a casual lunch, an intimate dinner, or a lively celebration, we look forward to welcoming you with open arms and treating you to an exceptional dining experience.

Thank you for being a part of our story.
<br></br>
Bon Appétit!
The Food Court Team





 </Typography>
       </Box>
      
   
    <Footer/>
    </>
  )
}

export default About