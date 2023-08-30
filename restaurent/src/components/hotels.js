import {Card, CardActionArea,CardContent, Typography,Box,Button } from '@mui/material'
import React from 'react'
import Navigation from './navigationbar'
import Footer from './footer'
import './navigationbar.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';


function Hotel() {
    // const addItem=()=>{
    //     console.log(menu.map(imageob=>
    //          console.log(imageob.title)
    //         ));
    // }
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [items, setItems] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('http://localhost:3001/restaurents');
              setItems(response.data);
          } catch (error) {
              console.error('Error fetching restaurants:', error);
          }
      };

      fetchData();
  }, []);

  const handleRestaurantClick = (Restaurant_name) => {
    setSelectedRestaurant(Restaurant_name);
    setIsButtonVisible(true);
    console.log(Restaurant_name)
};
const closeclick = () => {
    setIsButtonVisible(false);
};
const handleOptionSelect = (option) => {
    navigate(`/menu/${selectedRestaurant}/${option}`, { replace: true });
};

  return (
    <div>
        <Navigation/>
        <Box  paddingTop={40} sx={{backgroundColor:'orange', textAlign:'center',
           backgroundImage:"url(banner-about.jpg)",
           backgroundRepeat:'no-repeat',
           backgroundSize:'cover',
        
          
       }}>
             <Typography variant='h1' position={'absolute'} top={'7%'} left={'30%'}><p>Restaurents</p></Typography>
        </Box>
       
        <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
            >
                {items.map(data => (
                    <Card
                        sx={{ maxWidth: '1000px', m: 2 }}
                        key={data.id}
                        onClick={() => handleRestaurantClick(data.name)}
                    >
                        <CardActionArea>
                            <img
                                src={data.url}
                                alt={data.name}
                                style={{ width: '400px', height: '400px' }}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {data.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>

          {isButtonVisible && (
            
                <Box
                    sx={{
                        backgroundColor: 'rgba(128, 128, 128, 0.68)',
                        position: 'fixed',
                        top: 0,
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    
                    {/* <Typography variant='h3'>{selectedRestaurant}</Typography> */}
                    <Button variant='contained' color='warning' sx={{position:'fixed',left:'95%',top:'15%'}}  onClick={() => closeclick()}><CloseIcon></CloseIcon></Button>
                    <Button
                        variant="contained"
                        sx={{ width: '130px', height: '30px' }}
                        onClick={() => handleOptionSelect('veg')}
                    >
                        Veg
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ width: '130px', height: '30px', marginLeft: '10px' }}
                        onClick={() => handleOptionSelect('Non veg')}
                    >
                        Non-Veg
                    </Button>
                </Box>
               
            )}          
          
     <Footer/>
    </div>
  )
}

export default Hotel