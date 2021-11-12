// Require Post Schema from Model..
const Product = require("../models/products")


/**
 * products
 */
exports.productList = async (req, res) => {
    try {
        const data = await Product.find({});

        res.status(200).json({
            message: '',
            data: data
        })
    }
    catch (err) {
        console.log(err);
    }
}
exports.getSingleProduct = async (req, res) => {
    try {
        const param = req.params.productId;
        const data = await Product.findOne({ _id: param });

        res.status(200).json({
            message: '',
            data: data
        })
    }
    catch (err) {
        console.log(err);
    }
}

exports.addProduct = async (req, res) => {
    try {
        const data = new Product(req.body);
        await data.save();

        res.status(200).json({
            message: 'Product added successfully',
            data: data
        })
    }
    catch (err) {
        console.log(err);
    }
}

exports.deleteProductById = async (req, res) => {
    try {
        const param = req.params.productId;
        const data = await Product.deleteOne({ _id: param });

        res.status(200).json({
            message: 'Product Deleted Successfully!!',
            data: data
        })
    }
    catch (err) {
        console.log(err);
    }
}