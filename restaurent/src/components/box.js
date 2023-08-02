import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { Link } from 'react-router-dom';
import './navigationbar.css'



function Welcome() {
  return (
    <div>
       <Box height={700}  sx={{
        backgroundImage:"url(https://tse4.mm.bing.net/th?id=OIP.d5GjBrDXSVfLH_qyVbGAcQHaEK&pid=Api&P=0&h=180)",
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'fixed',
        backdropFilter:"blur",
        }}>
      <Box paddingTop={20} paddingLeft={5} textAlign={'center'} sx={{display:{xs:'block',sm:'none'}}} >
      <Typography variant='h2' color={'white'}>Welcome to <q><b>Foot Court</b></q></Typography>
      <Typography variant='h6' color={'white'}>The Native place of Healthy and Tasty Food</Typography>
      <Link to='/menu' ><Button variant='contained' color='warning' endIcon={<DeliveryDiningIcon/>}> Order Now</Button> </Link>
      </Box>

      <Box paddingTop={40} paddingLeft={5} textAlign={'center'} sx={{display:{xs:'none',sm:'block'}}} >
      <Typography variant='h2' color={'white'}>Welcome to <q><b>Foot Court</b></q></Typography>
      <Typography variant='h6' color={'white'}>The Native place of Healthy and Tasty Food</Typography>
      <Link to='/menu' ><Button variant='contained' color='warning' endIcon={<DeliveryDiningIcon/>}> Order Now</Button> </Link>
      </Box>
      </Box>
    </div>
  )
}

export default Welcome