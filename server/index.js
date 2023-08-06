const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userModel = require('./models/users')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/FoodCourt")

app.post('/login',(req,res) =>{
    const {email,password} = req.body
    userModel.findOne({email:email})
    .then(users => {
        if(users){
            if(users.password === password){
                res.json("success")
            }else{
                res.json("icorrect passsword")
            }
        }else{
            res.join("no user exist")
        }
    })
})

app.post('/signup', (req,res) =>{
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.listen(3000, () =>{
    console.log("server is running")
})