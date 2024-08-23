const Product = require("../models/model_product.js");

const create_product = async (req, res) => {
    try {
        const products = new Product(req.body);
        await products.save();
        res.status(200).json({
            message: 'Added new product',
            data: products
        });

    } catch (err) {
        res.status(500).json({
            message: 'Error creating product',
            error: err.message
        });
    }
};

const get_products = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            message: 'Successfull',
            data: products
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error getting products',
            error: err.message
        });
    }
}

module.exports = {
    create_product,
    get_products
}