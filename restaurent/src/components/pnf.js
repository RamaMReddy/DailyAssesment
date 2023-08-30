import React from 'react'
import { Box, Button } from '@mui/material'
import { NavLink} from 'react-router-dom'


function Pagenotfound() {
  return (
    <div >
      <Box sx={{display:'flex'}}>
       <Box height={600} width={600} sx={{
        backgroundImage:"url(https://www.pngmart.com/files/21/Food-Delivery-Scooter-PNG-Isolated-Picture.png)",
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
        backgroundPosition:'fixed',
        backdropFilter:"blur",
        
        }}></Box>
        <Box marginTop={20}>
        <p style={{fontSize:'80px',margin:'0%'}}>Oops!!<br></br> Page Not Found</p>
          {/* <Typography variant='h2' sx={{marginTop:'20%'}}>Page Not Found</Typography> */}
          <NavLink to="/">
          <Button color='warning' variant='contained' sx={{marginTop:'10px',width:'100%'}}>Go to Home</Button>
          </NavLink>
        </Box>
        </Box>
    </div>
  )
}

export default Pagenotfound