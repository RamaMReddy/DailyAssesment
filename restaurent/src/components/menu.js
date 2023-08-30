import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navigation from './navigationbar';
import Footer from './footer';
import { Typography, Box, Card, CardActionArea, CardContent,Button } from '@mui/material';

const Menu = () => {
    const { Restaurant_name, option } = useParams();
    const [menuItems, setMenuItems] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/restaurents/${Restaurant_name}`);
                const items = response.data.filter((item) =>
                  item.type===option,
                
                )
               
                setMenuItems(items);
                if (menuItems === null) {
                   console.log('No Items')
                }
        
               
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        };

        fetchData();
    }, [Restaurant_name, option]);

    const handleAddToCart = (item) => {
        const token = localStorage.getItem('token');
        const config = {
            withCredentials: true, // Include this option to send cookies
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
    
        const newItem = {
            restaurant:Restaurant_name,
            itemDetails: item,
        };
    
    
        axios.post('http://localhost:3001/add-to-cart', newItem, config)
            .then(response => {
               
                    console.log('Item added cart:', response.data);
                
               
            
            })
            .catch(error => {
                console.error('Error adding  to cart in client:', error);
            });
    };

    return (
      
            <div>
                  <Navigation/>
                {menuItems.map(menus=> (
                    <Box
                        sx={{
                            display: 'inline-block',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }}
                        key={menus.ID}
                    >
                        <Card sx={{ maxWidth: '300px', m: 2, display: 'flex' }}>
                            <CardActionArea>
                                <img
                                    style={{ width: '400px', height: '400px' }}
                                    src={'http://localhost:3000/'+menus.image}
                                    alt={menus.name}
                                />

                                <CardContent>
                                    <Typography variant="h5" gutterBottom component="div">
                                        {menus.name}
                                    </Typography>
                                    <Typography>{menus.price}</Typography>
                                    <Button
                                variant="outlined"
                                onClick={() => handleAddToCart(menus)}
                            >
                                Add to Cart
                            </Button>
                                </CardContent>
                            </CardActionArea>
                            {/* <CardActions>
                            <Button
                                variant="outlined"
                                onClick={() => handleAddToCart(menus)}
                            >
                                Add to Cart
                            </Button>
                        </CardActions> */}
                        </Card>
                    </Box>
                ))}
                <Footer/>
            </div>
      
    );
};

export default Menu;
