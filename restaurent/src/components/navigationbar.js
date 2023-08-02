import React, { useState } from 'react'
import {Typography,AppBar,Toolbar, Box, IconButton, Drawer, Button} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import { Link } from 'react-router-dom';
import './navigationbar.css';
import { orange } from '@mui/material/colors';



function Navigation() {

  const [mobileopen , Setmobile] = useState(false);

const drawertoggle = () =>{
    Setmobile(!mobileopen)
}

const drawer = (
     <Box onClick={drawertoggle} width={200} textAlign={'left'}>
      <Box display={'flex'} color={'orangered'} marginLeft={5} marginTop={5}> 
      <StorefrontTwoToneIcon/>
               <Typography variant='h6'>Food Court</Typography>
      </Box>
     
        <ul className='nav-menu-mob'>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/menu'>Menu</Link></li>
               <li><Link to='/about'>About</Link></li>
               <li><Link to='/contact'>Contact</Link></li>
               </ul>
              
     </Box>
     
)

  return (
    <div>
        <AppBar style={{color:"white",backgroundColor:"black",}}>
           <Toolbar>
            <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{display:{sm:'none'}}} onClick={drawertoggle}>
              <MenuIcon/>
            </IconButton>
               <StorefrontTwoToneIcon/>
               <Typography variant='h6' sx={{flexGrow:1}}>Food Court</Typography>
               {/* <Link to="/">Home</Link>
               <Link to="/menu">Menu</Link> */}
               <Box sx={{display:{xs:'none',sm:'block'}}}>
               <ul className='nav-menu'>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/menu'>Menu</Link></li>
               <li><Link to='/about'>About</Link></li>
               <li><Link to='/contact'>Contact</Link></li>
               </ul>
               </Box>
               <Button variant='contained'>Login/Signup</Button>
           </Toolbar>
          
        </AppBar>
        <Box>
          <Drawer variant='temperory' open={mobileopen} onClose={drawertoggle}
          sx={{display:{sx:'block',sm:'none'}}}
          >
              {drawer}
          </Drawer>
        </Box>
      
    </div>
  )
}

export default Navigation