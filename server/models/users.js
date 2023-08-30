const mongoose = require("mongoose")

const itemDetailsSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    type: String,
    ID: Number
})

const cartItemSchema = new mongoose.Schema({
    restaurant: String,
    itemDetails: [itemDetailsSchema]
})

const userSchema = new mongoose.Schema({
    user_id: String,
    name:String,
    email:String,
    password:String,
    cpassword:String,
    cartItems: [cartItemSchema]
})

const userModel = new mongoose.model("users", userSchema)
module.exports = userModel