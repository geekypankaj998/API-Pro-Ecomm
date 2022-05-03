const mongoose = require("mongoose");

const productCatalSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  quantity:{
    type:Number,
    required:true
  }  
},
{
  timestamps:true
});

const Product = mongoose.model('Product',productCatalSchema);
module.exports = Product; 