const mongoose = require('mongoose');

const product_schema = new mongoose.Schema({
    product_id:{
        type: String,
        require: [true, 'Id is required'],
        unique: true
    },
    product_name: {
        type: String,        
    },
    product_price: {
        type: String,
    }
});

const Product = mongoose.model("Product", product_schema);

module.exports = Product;
