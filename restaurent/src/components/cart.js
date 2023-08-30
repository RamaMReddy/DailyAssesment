import React, { useState, useEffect } from "react";
import { Typography, Paper } from "@mui/material";
import axios from "axios";

const Cart = () => {
  const [cartDetails, setCartDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch cart details from the backend
    // axios.get('/get-cart-details',{headers:{Authorization:'Bearer ${token}'}})
    axios
      .get("http://localhost:3001/get-cart-details", { withCredentials: true })
      .then((response) => {
        console.log('cart data:',response.data);
        setCartDetails(response.data);
        const cardDetails = response.data;
        console.log(cardDetails)
      
      })
      .catch((error) => {
        console.error("Error fetching cart details:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
      console.log('card details:',cartDetails);
  }, []);

  return (

      <div className="cart-container">
        <Typography variant="h4">Your Cart</Typography>
        <div className="cart-items">
          {isLoading ? (
            <div className="loading-spinner">Loading...</div>
          ) : cartDetails.length > 0 ? (
            cartDetails.map((cartDetail, index) => (
              <Paper key={index} elevation={3} className="cart-item-card">
                <div className="item-details">
                  <Typography variant="h5" className="restaurant-name">
                    Restaurant: {cartDetail.restaurant}
                  </Typography>
                  {cartDetail.itemDetails.map((itemDetail, itemIndex) => (
                    <div key={itemIndex} className="cart-item">
                      {itemDetail && itemDetail.image && (
                        <img
                          src={itemDetail.image}
                          alt={itemDetail.name}
                          className="item-image"
                          style={{ height: 100 }}
                        />
                      )}
                      <div className="item-text">
                        <Typography variant="h6" className="item-name">
                          {itemDetail.name}
                        </Typography>
                        <Typography variant="body2" className="item-price">
                          Price: ${itemDetail.price}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </Paper>
            ))
          ) : (
            <Typography variant="body1" className="empty-cart-message">
              Your cart is empty.
            </Typography>
          )}
        </div>
      </div>
  
  );
};

export default Cart;
