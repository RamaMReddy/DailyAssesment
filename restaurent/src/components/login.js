import React, { useState } from 'react'
import {Box,Button,TextField,Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

function Authen(){
    const [isLogin,SetIsLogin] = useState(false);
    const [input,SetInput] = useState({
        name : "",
        email : "",
        password : "",
        mobile : "",
    });
    const handleChange = (e) => {
        SetInput((prevStaten) => ({
            ...prevStaten,
            [e.target.name] : e.target.value
        })

        )
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(!isLogin ? "Login Event" : "SignUp Event");
        console.log(input);
    };
    const resetState =() =>{
        SetIsLogin(!isLogin);
        SetInput({name:"",email:"",password:"",mobile:"",})
    }
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <Box 
        display={'flex'} 
        flexDirection={'column'} 
        maxWidth={400} 
        alignItems={'center'} 
        justifyContent={'center'}
        margin={'auto'}
        marginTop={5}
        padding={3}
        boxShadow={'5px 5px 20px black'}
        borderRadius={5}
        >
           <Typography variant='h3'>{!isLogin ? "Login" : "SignUp"}</Typography>
           {isLogin &&(
                 <TextField type='text' placeholder='Name' name='name' onChange={handleChange} value={input.name} sx={{marginTop:2} }></TextField>
           )}
           <TextField type='email' placeholder='Email' name='email' onChange={handleChange} value={input.email} sx={{marginTop:2} }></TextField>
           <TextField type='password' placeholder='Password' name='password' onChange={handleChange} value={input.password} sx={{marginTop:2} }></TextField>
           {isLogin &&(
            <TextField type='number' placeholder='Mobile' name='mobile' onChange={handleChange} value={input.mobile} sx={{marginTop:2} }></TextField>

           )

           }
           
           <Button
            endIcon={!isLogin ? <LoginIcon/>: <HowToRegIcon/>}
           variant='contained' color='warning' type='submit'
            sx={{
                marginTop:2
            }}
        //    endIcon={!isLogin ? <LoginIcon/>: <HowToRegIcon/>}
           >{!isLogin ? "Login" : "SignUp"}</Button>
           <Button
           endIcon={isLogin ? <LoginIcon/> : <HowToRegIcon/>}
            sx={{
                marginTop:2
            }}
            onClick={resetState}
           >Change to {isLogin ? "Login" : "SignUp"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Authen;

