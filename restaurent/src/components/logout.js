import React from "react";
import { useNavigate } from "react-router-dom"; 
// import Layout from "./../components/Layout/Layout";
// import "../styles/LogoutStyles.css";
import Cookie from 'js-cookie';
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    axios.post('http://localhost:3001/logout',{withCredentials:true})
            .then(response => {
                console.log(response);
            
            })
            .catch(error => {
                console.error(error);
            });
    Cookie.remove("token");
    navigate("/NavigateTo"); 
    setTimeout(() => {
      navigate("/"); 
    }, 1000); 
  };

  return (
   
      <div className="logout-container">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
 
  );
};

export default Logout;
