import {ImageList, ImageListItem, Typography,Box } from '@mui/material'
import React from 'react'
import menu from './menu.json'
import Navigation from './navigationbar'
import Footer from './footer'

function Menulist() {
  return (
    <div>
        <Navigation/>
        <Box height={40} sx={{backgroundColor:'black', color:'white',textAlign:'center',marginTop:'200'}}> 
        <Typography variant='h6'>Copyright &copy; 2023</Typography>
        </Box>
          <ImageList cols={3} rowHeight={400}>
            {menu.map(imageobj => 
                <ImageListItem key={imageobj.id}>
                    <img src={imageobj.img} alt={imageobj.title}></img>
                    <Typography variant='h5' sx={{backgroundColor:'orange'}}>{imageobj.title}</Typography>
                </ImageListItem>   
                )}
          </ImageList>
     <Footer/>
    </div>
  )
}

export default Menulist