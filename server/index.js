const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const userModel = require('./models/users');
const hotelModel = require('./models/restaurents');
const Cookie = require('js-cookie');

const app = express()
app.use(express.json())
// app.use(cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true
// }))

const corsOptions = {
    credentials: true,
    origin: 'http://localhost:3000' // Replace with your actual frontend domain
};
app.use(cors(corsOptions))
app.use(cookieParser());

mongoose.connect("mongodb://127.0.0.1:27017/Foodcourt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("DB Connected")).catch(err=>console.log(err))

const jwtSecretKey = process.env.JWT_SECRET_KEY || 'yourSecretKey';
// app.post('/login',(req,res) =>{
//     const {email,password} = req.body
//     userModel.findOne({email:email})
//     .then(users => {
//         if(users){
//             if(users.password === password){
//                 res.json("success")
//             }else{
//                 res.json("incorrect passsword")
//             }
//         }else{
//             res.json("no user exist")
//         }
//     })
// })
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    userModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ user_id: user.user_id }, jwtSecretKey);
                        console.log('token at login:',token);
                        // Cookie.set('token',token)
                       return res.json({token,status:'Success'});
                      
                    } else {
                        return res.json('The password is incorrect');
                    }
                });
            } else {
                res.json('No records existed');
            }
        });
});

// app.post('/signup', (req,res) =>{
//     const {email} = req.body
//     userModel.findOne({email:email})
//     .then(users =>{
//         if (users) {
//             res.json("This Email Already Registered")
//         }else{
//             userModel.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
//         }
//     })
   
// })

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    const user_id = uuidv4();

    bcrypt.hash(password, 10)
        .then(hash => {
            userModel.create({ user_id, name, email, password: hash })
                .then(user => {
                    // const token = jwt.sign({ user_id: user.user_id }, jwtSecretKey);
                    // res.cookie('token', token);
                    // console.log('token:',token);
                    res.json('Success');
                })
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
});

// app.post('/signup', (req, res) => {
//     const { name, email, password, cpassword } = req.body;

//     const user_id = uuidv4();


//     bcrypt.hash(password, 10)
//         .then(hash => {
//             userModel.findOne({email:email})
//                 .then(user => {
//                     if (user) {
//                         res.json("This Email Already Registered")
//                     }else{
//                     userModel.create({ user_id, name, email, password: hash, cpassword:hash })
//                     const token = jwt.sign({ user_id: user.user_id }, jwtSecretKey);
//                     // res.cookie('token', token);
//                     res.cookie('token', token, { httpOnly: true, sameSite: 'strict' });
//                     res.json('Success');
//         }})
//                 .catch(err => res.json(err));
//         })
//         .catch(err => res.json(err));
// });

app.get('/restaurents', async(req,res)=>{
    try {
        const fulldata = await hotelModel.find()
        return res.json(fulldata)
    }
    catch (err) {
        console.log(err.message)
    }
})

app.get('/Admin', async(req,res)=>{
    try {
        const fulldata = await userModel.find()
        return res.json(fulldata)
    }
    catch (err) {
        console.log(err.message)
    }
})

app.get('/restaurents/:Restuarant_name', async (req, res) =>{
    try{
        Restaurant_name = req.params.Restuarant_name;
        const fullData = await hotelModel.findOne({name:Restaurant_name})
        return res.json(fullData.menu);
       
    } catch (err) {
        console.log(err.message);
    }
    
})

app.post('/admin',(req,res) =>{
    hotelModel.create(req.body)
    .then(hotels => res.json(hotels))
    .catch(err => res.json(err))
})

app.post('/logout', async (req, res) => {
    try {
        const token = req.cookies.token; 
        if (!token) {
           console.log("Unauthorized Access") 
        }
        const decodedToken = jwt.verify(token, jwtSecretKey);
        const userId = decodedToken.user_id;

        await userModel.updateOne({ user_id: userId }, { cartItems: [] });
        res.clearCookie('token'); 
        res.status(200).json('Logged out successfully');
    } catch (error) {
        console.error('Error logging out:', error);
        res.status(500).json('Error logging out');
    }
});

app.post('/add-to-cart', async (req, res) => {
    const { restaurant, itemDetails } = req.body;

    try {
        const token = req.cookies.token; 
        const decodedToken = jwt.verify(token, jwtSecretKey);
        const userId = decodedToken.user_id; 

        const user = await userModel.findOne({ user_id: userId });
        const itemdetails = await userModel.findOne({itemDetails:itemDetails})

        if (!user) {
            return res.status(400).json('User not found');
        }
     console.log(itemdetails)
        user.cartItems.push({
            restaurant: restaurant,
            itemDetails: itemDetails,
        });

        await user.save();

        res.status(200).json('Item added to cart');
    } catch (error) {
        console.error('Error adding item to cart in server:', error);
        res.status(500).json('Error adding item to cart');
    }
});

// Your existing imports and setup code...

app.get('/get-cart-details', async (req, res) => {
    try {
        const token = req.cookies.token;
        const decodedToken = jwt.verify(token, jwtSecretKey);
        const userId = decodedToken.user_id;

        const user = await userModel.findOne({ user_id: userId });

        const cartDetails = await user.cartItems;
       

        res.json(cartDetails);
    } catch (error) {
        console.error('Error fetching user cart details:', error);
        res.status(500).json('Error fetching user cart details');
    }
});

app.get('/Admin', async(req,res)=>{
    const {email} = req.body
    try {
        const fulldata = await userModel.deleteOne({email:email})
        return res.json(fulldata)
    }
    catch (err) {
        console.log(err.message)
    }
})

app.listen(3001, () =>{
    console.log("server is running")
})