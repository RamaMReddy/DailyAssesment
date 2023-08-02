import React, { useState } from 'react'
import {Typography,AppBar,Toolbar, Box, IconButton, Drawer, Button,Avatar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import {NavLink } from 'react-router-dom';
import './navigationbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



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
               <li><NavLink to='/'>Home</NavLink></li>
               <li><NavLink to='/menu'>Menu</NavLink></li>
               <li><NavLink to='/about'>About</NavLink></li>
               <li><NavLink to='/contact'>Contact</NavLink></li>
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
            <Avatar variant='square' alt="Logo" src="logo.png" />
               {/* <StorefrontTwoToneIcon/> */}
               <Typography variant='h6' sx={{flexGrow:1}}><b><p style={{fontSize:'20px'}}>Food Court</p></b></Typography>
               {/* <Link to="/">Home</Link>
               <Link to="/menu">Menu</Link> */}
               <Box sx={{display:{xs:'none',sm:'block'}}}>
               <ul className='nav-menu'>
               <li><NavLink to='/'>Home</NavLink></li>
               <li><NavLink to='/menu'>Menu</NavLink></li>
               <li><NavLink to='/about'>About</NavLink></li>
               <li><NavLink to='/contact'>Contact</NavLink></li>
               </ul>
               </Box>
               <NavLink to=''> <Button variant='contained' color='error' sx={{borderRadius:'50px',marginRight:'10px'}}><ShoppingCartIcon/></Button></NavLink>
               <NavLink to='/login'> <Button variant='contained'>Login/Signup</Button></NavLink>
              
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