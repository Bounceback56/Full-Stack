const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {type:String,required:true},
    price: {type:Number,min:[0,"wrong min price"],required:true},
    image: {type:String},
    sizes:[String]
});

exports.Product = mongoose.model('Product', productSchema);