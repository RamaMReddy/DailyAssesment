const mongoose = require("mongoose")


const Menu = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    type: String,
    Id: Number
})

const hotelSchema = new mongoose.Schema({
    name:String,
    url:String,
    veg:String,
    nonVeg:String,
    id:Number,
    menu: [Menu]
})

const hotelModel = new mongoose.model("hotels", hotelSchema)
module.exports = hotelModel