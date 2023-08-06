import React,{useState}  from 'react'
import {Box,Button,TextField,Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login(){
  const [email,Setemail] = useState()
   const [password,Setpassword] = useState()
const navigate = useNavigate()

   const handleSubmit =(e)=>{
    e.preventDefault()
   axios.post('http://localhost:3000/login',{email,password})
   .then(result => {console.log(result) 
        if(result.data === "success"){
          navigate("/")
        }
      
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
           <Typography variant='h3'>Login</Typography>
         
              
     
           <TextField type='email' placeholder='Email' onChange={(e) => Setemail(e.target.value)} sx={{marginTop:2} }></TextField>
           <TextField type='password' placeholder='Password' onChange={(e) => Setpassword(e.target.value)}  sx={{marginTop:2} }></TextField>


           
           <Button
            endIcon={<LoginIcon/>}
           variant='contained' color='warning' type='submit'
            sx={{
                marginTop:2
            }}
        //    endIcon={!isLogin ? <LoginIcon/>: <HowToRegIcon/>}
           >Log in</Button>
           <NavLink to="/signup">
           <Button
           endIcon={<HowToRegIcon/>}
            sx={{
                marginTop:2
            }}
          
           >Change to SignUp</Button>
           </NavLink>
          
        </Box>
      </form>
    </div>
  )
}

export default Login;
