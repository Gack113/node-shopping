const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create product Schema & model
const ProductSchema = new Schema({
    name:{
        type:String,
        required: [true,'Name field is required']
    },
    image:{
        type:String,
        required: [true,'Feature image is required']
    },
    description:{
        type:String,
        required: [true,'Provide some info about this']
    },
    price:{
        type:Number,
        require: [true,'Price not valid']
    },
    discount:{
        type:Number,
        default:0
    },
    view:{
        type:Number,
        default:0
    },
    available:{
        type:Boolean,
        default: true
    }
})

const Product = mongoose.model('product',ProductSchema)

module.exports = Product

