import React  from 'react'
import {Box,Button,TextField,Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios'
import {useFormik} from 'formik'
import Navigation from './navigationbar';
import Footer from './footer';
import Cookie from 'js-cookie';

function Login(){
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:(email,password) =>{
      email = formik.values.email
      password = formik.values.password
      axios.post('http://localhost:3001/login',{email,password})
      .then(result => {console.log(result) 
        Cookie.set("token",result.data.token)
           if(result.data.status === "Success"){
             navigate("/")
           }
           if(result.data === "The password is incorrect"){
            alert("Correct Your password")
          }
          if(result.data === "No records existed"){
            alert("Enter a Registered Email")
          }
         
      })
      .catch(err => console.log(err))
    
    },
    validate:(values) => {
      var errors = {}
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
      }
      return errors;
    },
  })
  // const [email,Setemail] = useState()
  //  const [password,Setpassword] = useState()
const navigate = useNavigate()



  //  const handleSubmit =(email,password)=>{
  //   email = formik.values.email
  //   password = formik.values.password
  //  }
  return (
    <div>
    <Navigation></Navigation>
     <Box 
     display={'flex'}
     maxWidth={800} 
     margin={'auto'}
     boxShadow={'5px 5px 20px black'}
     marginTop={15}
     marginBottom={10}
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
      <h2 style={{color:'white',textAlign:'center',marginTop:'50px'}}>Welcome Back To</h2>
      <h1 style={{color:'white',textAlign:'center'}}>Food Court</h1>
      <h3 style={{color:'white',textAlign:'center'}}>Login fastly your Favrouite dish is waiting for you..</h3>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Box 
        display={'flex'} 
        flexDirection={'column'} 
        maxWidth={400} 
        alignItems={'center'} 
        justifyContent={'center'}
        margin={'auto'}
       paddingLeft={10}
        >
           <Typography ><h2>Login</h2></Typography>
         
              
     
           <TextField type='email' placeholder='Email' name='email' id='email' value={formik.values.email} onChange={formik.handleChange} sx={{marginTop:2} }></TextField>
           {formik.errors.email?<div className='errors'>{formik.errors.email}</div>:null}
           <TextField type='password' placeholder='Password' name='password' id='password' value={formik.values.password} onChange={formik.handleChange}  sx={{marginTop:2} }></TextField>
           {formik.errors.password?<div className='errors'>{formik.errors.password}</div>:null}


           
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
      </Box>
<Footer></Footer>
    </div>
  )
}

export default Login;
