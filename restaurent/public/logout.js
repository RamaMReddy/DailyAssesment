import React from "react";
import { useNavigate } from "react-router-dom"; 
import Layout from "./../components/Layout/Layout";
import "../styles/LogoutStyles.css";
import Cookie from 'js-cookie';

const Logout = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    Cookie.remove("token");
    navigate("/NavigateTo"); 
    setTimeout(() => {
      navigate("/"); 
    }, 1000); 
  };

  return (
    <Layout>
      <div className="logout-container">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </Layout>
  );
};

export default Logout;
