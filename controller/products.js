// Require Post Schema from Model..
const Products = require("../models/products")


/**
 * products
 */
exports.productList = async (req, res) => {
    try {
        const data = await Products.find({});

        res.status(200).json({
            message: '',
            data: data
        })
    }
    catch (err) {
        console.log(err);
    }
}