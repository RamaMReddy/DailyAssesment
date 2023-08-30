import { Box, Typography,Avatar,Button,TextField } from "@mui/material";
import React,{useState,useEffect} from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DeleteIcon from '@mui/icons-material/Delete';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import axios from "axios";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";

function Admin(){
    // function handleFileChange() {
    //     const fileInput = document.getElementById('fileInput');
    //     const fileNameDisplay = document.getElementById('fileNameDisplay');
        
    //     if (fileInput.files.length > 0) {
    //         const fileName = fileInput.files[0].name;
    //         fileNameDisplay.textContent = `Uploaded file name: ${fileName}`;
    //     } else {
    //         fileNameDisplay.textContent = 'No file selected';
    //     }
    // }
  
    const formik = useFormik({
        initialValues:{
            id:'',
            name:'',
            veg:'',
            nonVeg:'',
            url:''
          },

          
    
    onSubmit:(id,name,veg,nonVeg,url) =>{
       id = formik.values.id
       name = formik.values.name
       veg = formik.values.veg
       nonVeg = formik.values.nonVeg
       url = formik.values.url.name
       axios.post('http://localhost:3001/admin',{id,name,veg,nonVeg,url})
       .then(result => {console.log(result)})
       .catch(err => console.log(err))
    }
    })

    const [isdashboard, setIsdashboard] = useState(true);
    const [isuser, setIsuser] = useState(false);
    const [ishotel, setIshotel] = useState(false);
    const [isnhotel, setIsnhotel] = useState(false);
    const handledash =()=>{
        setIsdashboard(true);
        setIsuser(false);
        setIshotel(false)
        setIsnhotel(false)
    }
    const handleuser = () => {
        setIsdashboard(false);
        setIsuser(true);
        setIshotel(false)
        setIsnhotel(false)
    };
    const handlehotel = () => {
        setIsdashboard(false);
        setIsuser(false);
        setIshotel(true)
        setIsnhotel(false)
    };
    const handlenhotel = () => {
        setIsdashboard(false);
        setIsuser(false);
        setIshotel(false)
        setIsnhotel(true)
    };

    const [userslist, setUserslist] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/Admin');
                setUserslist(response.data);
            } catch (error) {
                console.error('Error fetching restaurants:', error);
            }
        };
  
        fetchData();
    }, []);
    console.log(userslist.length)
    const [hotellist, setHotellist] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/restaurents');
                setHotellist(response.data);
            } catch (error) {
                console.error('Error fetching restaurants:', error);
            }
        };
  
        fetchData();
    }, []);

    
    return(
        <>
        <Box 
        height={610}
        width={150}
         sx={{
            backgroundColor:'black'
         }}
        >
            <div style={{display:'flex'}}>
            <Avatar alt="Logo" src="logo.png" />
               <Typography variant='h6' color={'white'}><b><p style={{fontSize:'16px'}}>Food Court</p></b></Typography> 
            </div>
            <ul className="ad-list">
                <li onClick={() => handledash()}><NavLink><p id="ad-icons"><DashboardIcon/></p><p>Dashboard</p></NavLink></li>
                <li onClick={() => handleuser()}><NavLink><p id="ad-icons"><PeopleAltIcon/></p><p>Users</p></NavLink></li>
                <li onClick={() => handlehotel()}><NavLink><p id="ad-icons"><RestaurantIcon/></p><p>Restaurents</p></NavLink></li>
                <li onClick={() => handlenhotel()}><NavLink><p id="ad-icons"><StorefrontIcon/></p><p style={{fontSize:'15px'}}>New Restaurent</p></NavLink></li>
            </ul>
           
        </Box>
        <Box
        width={1060}
        height={100}
        position={'absolute'}
        top={0}
        left={150}
        sx={{
            backgroundColor:'orange'
            
         }}
        >
           <Typography color={'white'} marginLeft={10}><h2>Hello,Welcome Back Admin</h2></Typography>
        </Box>

     { isdashboard && (
        <div className="main">
       <Box display={'flex'}>
        <Box 
        width={150}
        height={100}
        sx={{
            border:'1px solid black',
            marginLeft:'20px',
            marginTop:'20px',
            boxShadow:'5px 5px 15px black',
            borderRadius:'10px'
        
        }}>
            <Typography><p>Total users</p></Typography>
            <Typography sx={{float:'right',marginRight:'5px',fontSize:'30px'}}>{userslist.length}</Typography>
        </Box>
        <Box 
        width={150}
        height={100}
        
        sx={{
            border:'1px solid black',
            marginLeft:'20px',
            marginTop:'20px',
            boxShadow:'5px 5px 15px black',
            borderRadius:'10px'
        }}>
            <Typography><p>Total Restaurents</p></Typography>
            <Typography sx={{float:'right',marginRight:'5px',fontSize:'30px'}}>{hotellist.length}</Typography>
        </Box>
        </Box>
         </div>
     )}
       
      

       { isuser && (
       <div className="main">
       <Typography>Users</Typography>
      
       <table className="user-tab">
       <tr>
       <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Terminate User</th>
       </tr>
       {userslist.map(data => (
       <tr>
        <td>1</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td ><DeleteIcon></DeleteIcon></td>
       </tr>
        ) )}
       </table>
     
       </div>
       )}

{ ishotel && (
       <div className="main">
       <Typography sx={{textAlign:'center'}}>Restaurant</Typography>
       <table className="user-tab">
       <tr>
       <th>Id</th>
        <th>Name</th>
        <th>Veg</th>
        <th>Non Veg</th>
        <th>Update</th>
        <th>Terminate</th>
       </tr>
       {hotellist.map(data => (
       <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.veg}</td>
        <td>{data.nonVeg}</td>
        <td><SystemUpdateAltIcon/></td>
        <td><DeleteIcon/></td>
       </tr>
        ) )}
       </table>
     
       </div>
       )}

{ isnhotel && (
       <div className="main">
      
       <form onSubmit={formik.handleSubmit}>
        <Box
         display={'flex'} 
         flexDirection={'column'} 
         maxWidth={300} 
         alignItems={'center'} 
         justifyContent={'center'}
         margin={'auto'}
        marginTop={2}
        boxShadow={'5px 5px 20px black'}
       >
         <Typography>Add Hotel</Typography>
            <TextField type="number" placeholder="Restaurent ID" name="id" id="id" value={formik.values.id} onChange={formik.handleChange} sx={{marginTop:'2px'}}></TextField>
            <TextField type="text" placeholder="Restaurent Name" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} sx={{marginTop:'2px'}}></TextField>
            <TextField type="text" placeholder="Veg Items" name="veg" id="veg" value={formik.values.veg} onChange={formik.handleChange} sx={{marginTop:'2px'}}></TextField>
            <TextField type="text" placeholder="Nonveg Items" name="nonVeg" id="nonVeg" value={formik.values.nonVeg} onChange={formik.handleChange} sx={{marginTop:'2px'}}></TextField>
            {/* <TextField type="file" placeholder="Image" name="url" id="fileInput"   onChange={handleFileChange} sx={{marginTop:'2px'}}></TextField>
            <p id="url" name value={formik.values.url}></p> */}
             <input
                type="file"
                id="fileInput"
                name="url"
                onChange={(event) => {
                    formik.setFieldValue('url', event.currentTarget.files[0]);
                }}
            />
            {formik.values.url && (
                <p>Uploaded file name: {formik.values.url.name}</p>
            )}
            <Button type="submit" variant="contained" color="warning"  sx={{marginTop:'2px'}}>Submit</Button>
            </Box>
        </form>
       </div>
       )}
        </>
    )
}

export default Admin