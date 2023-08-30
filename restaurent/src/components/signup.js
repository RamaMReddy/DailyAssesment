import React from 'react'
import {Box,Button,TextField,Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik'
import Navigation from './navigationbar';
import Footer from './footer';

function Sign(){

  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      cpassword:''
    },
   
    

    onSubmit:(name,email,password,cpassword) =>{
    name = formik.values.name
    email = formik.values.email
    password = formik.values.password
    cpassword = formik.values.cpassword
    // exist = formik.values.exist
      axios.post('http://localhost:3001/signup',{name,email,password,cpassword})
      .then(result => {console.log(result)
        if(result.data === "This Email Already Registered"){
            // formik.values.exist = 'This Email Already Registered'
            alert('This Email Already Registered.Try Another Email...')
        }else{
          navigate("/login")
        }
        
      })
      .catch(err => console.log(err))
    },
  
    validate:(values) => {
      var errors = {}
      if (!values.name) {
        errors.name = 'Name is Required'
      }
      if (!values.email) {
        errors.email = 'Email is Required'
      }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Not a valid email"
       }
      //  else if (formik.values.exist){
      //  errors.exist = "This Email Already Registered"
      // }
      if (!values.password) {
        errors.password = 'Password is Required'
      }else if (!/(?=.*[0-9])/.test(values.password)){
        errors.password = "Password Should Contain 1 Number"
       }else if (values.password.length < 6){
        errors.password = "Password Should Contain Minimum 6 Characters"
       }
       if (!values.cpassword) {
        errors.cpassword = 'Confirm Password is Required'
      }
      else if (values.cpassword !== values.password) {
        errors.cpassword = "Password and Confirm Password Should be Same"
       }
      return errors;
    },

  })
  

  //  const [name,Setname] = useState()
  //  const [email,Setemail] = useState()
  //  const [password,Setpassword] = useState()
   const navigate = useNavigate()

  //  const handleSubmit =(e)=>{
    

  return (
    <div>
      <Navigation></Navigation>
      <Box display={'flex'}
     maxWidth={800} 
     margin={'auto'}
     boxShadow={'5px 5px 20px black'}
     marginTop={15}
     marginBottom={10}
    //  padding={3}
      >
      <Box 
     width={'50%'}
      sx={{
        backgroundImage:"url(https://tse4.mm.bing.net/th?id=OIP.d5GjBrDXSVfLH_qyVbGAcQHaEK&pid=Api&P=0&h=180)",
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'fixed',
        backdropFilter:"blur",
      }}>
      <h2 style={{color:'white',textAlign:'center',marginTop:'100px'}}>Welcome To</h2>
      <h1 style={{color:'white',textAlign:'center'}}>Food Court</h1>
      <h3 style={{color:'white',textAlign:'center'}}>Register here for place where you can find tasty and Healthy Food</h3>
      </Box>
      <Box>
      <form onSubmit={formik.handleSubmit}>
        <Box 
        display={'flex'} 
        flexDirection={'column'} 
        maxWidth={400} 
        alignItems={'center'} 
        justifyContent={'center'}
        margin={'auto'}
       paddingLeft={10}
        // sx={{
        //   backgroundColor:'blue'
        // }}
       
        >
           <Typography><h2>SignUp</h2></Typography>
         
                 <TextField type='text' placeholder='Name' name='name' id='name' value={formik.values.name} onChange={formik.handleChange}  sx={{marginTop:2} }></TextField>
                 {formik.errors.name?<div className='errors'>{formik.errors.name}</div>:null}
     
           <TextField type='email' placeholder='Email' name='email' id='email' value={formik.values.email} onChange={formik.handleChange}   sx={{marginTop:2} }></TextField>
           {formik.errors.email?<div className='errors'>{formik.errors.email}</div>:null}
           {formik.errors.exist?<div className='errors'>{formik.errors.exist}</div>:null}
           <TextField type='password' placeholder='Password' name='password' id='password' value={formik.values.password} onChange={formik.handleChange} sx={{marginTop:2} }></TextField>
           {formik.errors.password?<div className='errors'>{formik.errors.password}</div>:null}
           <TextField type='password' placeholder='Confirm Password' name='cpassword' id='cpassword' value={formik.values.cpassword} onChange={formik.handleChange} sx={{marginTop:2} }></TextField>
           {formik.errors.cpassword?<div className='errors'>{formik.errors.cpassword}</div>:null}
           
           <Button typeof='submit'
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
      </Box>
      </Box>
      <Footer></Footer>
    </div>
  )
}

export default Sign;
