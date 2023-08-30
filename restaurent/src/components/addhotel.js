import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import axios from "axios";

function Addhotel(){

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
   url = formik.values.url
   axios.post('http://localhost:3001/admin',{id,name,veg,nonVeg,url})
   .then(result => {console.log(result)})
   .catch(err => console.log(err))
}
})

    return(
       <>
      
        <form onSubmit={formik.handleSubmit}>
        <Box
         display={'flex'} 
         flexDirection={'column'} 
         maxWidth={300} 
         alignItems={'center'} 
         justifyContent={'center'}
         margin={'auto'}
        paddingLeft={10}
       >
            <TextField type="number" placeholder="Restaurent ID" name="id" id="id" value={formik.values.id} onChange={formik.handleChange}></TextField>
            <TextField type="text" placeholder="Restaurent Name" name="name" id="name" value={formik.values.name} onChange={formik.handleChange}></TextField>
            <TextField type="text" placeholder="Veg Items" name="veg" id="veg" value={formik.values.veg} onChange={formik.handleChange}></TextField>
            <TextField type="text" placeholder="Nonveg Items" name="nonVeg" id="nonVeg" value={formik.values.nonVeg} onChange={formik.handleChange}></TextField>
            <TextField type="text" placeholder="Image" name="url" id="url" value={formik.values.url} onChange={formik.handleChange}></TextField>
            <Button type="submit" variant="contained" color="warning">Submit</Button>
            </Box>
        </form>
      
       </>
    )
}

export default Addhotel