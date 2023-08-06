import React,{useState} from 'react'
import {Box,Button,TextField,Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Sign(){
   const [name,Setname] = useState()
   const [email,Setemail] = useState()
   const [password,Setpassword] = useState()
   const navigate = useNavigate()

   const handleSubmit =(e)=>{
     e.preventDefault()
    axios.post('http://localhost:3000/signup',{name,email,password})
    .then(result => {console.log(result)
        navigate("/login")
    })
    .catch(err => console.log(err))
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
           <Typography variant='h3'>SignUp</Typography>
         
                 <TextField type='text' placeholder='Name' onChange={(e) => Setname(e.target.value)}  sx={{marginTop:2} }></TextField>
     
           <TextField type='email' placeholder='Email'  onChange={(e) => Setemail(e.target.value)}  sx={{marginTop:2} }></TextField>
           <TextField type='password' placeholder='Password'  onChange={(e) => Setpassword(e.target.value)} sx={{marginTop:2} }></TextField>
           
           <Button
            endIcon={<HowToRegIcon/>}
           variant='contained' color='warning' type='submit'
            sx={{
                marginTop:2
            }}
        //    endIcon={!isLogin ? <LoginIcon/>: <HowToRegIcon/>}
           >Sign Up</Button>
           <NavLink to="/login">
           <Button
           endIcon={<LoginIcon/>}
            sx={{
                marginTop:2
            }}
          
           >Change to Login</Button>
           </NavLink>
           
        </Box>
      </form>
    </div>
  )
}

export default Sign;
