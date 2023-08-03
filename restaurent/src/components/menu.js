import {ImageList, ImageListItem, Typography,Box, Button } from '@mui/material'
import React from 'react'
import menu from './menu.json'
import Navigation from './navigationbar'
import Footer from './footer'
import './navigationbar.css'



function Menulist() {
    const addItem=()=>{
        console.log(menu.map(imageob=>
             console.log(imageob.title)
            ));
    }
  return (
    <div>
        <Navigation/>
        <Box  paddingTop={40} sx={{backgroundColor:'orange', textAlign:'center',
           backgroundImage:"url(banner-about.jpg)",
           backgroundRepeat:'no-repeat',
           backgroundSize:'cover',
        
          
       }}>
             <Typography variant='h1' position={'absolute'} top={'7%'} left={'40%'}><p>Menu</p></Typography>
        </Box>
       
          <ImageList cols={3} rowHeight={400}>
            {menu.map(imageobj => 
                <ImageListItem key={imageobj.id}>
                    <img src={imageobj.img} alt={imageobj.title}></img>
                    <Typography variant='h5' sx={{backgroundColor:'orange'}} textAlign={'center'}>{imageobj.title}-Rs.{imageobj.price}</Typography>
                    <Button variant='contained' color='success' onClick={addItem} key={imageobj.id}>Add Item</Button>
                </ImageListItem>   
                )}
          </ImageList>
          
     <Footer/>
    </div>
  )
}

export default Menulist