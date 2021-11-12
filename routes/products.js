// Main Module Required..
const express = require('express');

// Created Require Files..
const controller = require('../controller/products');

const router = express.Router();

/**
 * /products
 * http://localhost:5000/products
 */

router.get('/product-list', controller.productList);
router.get('/get-single-product/:productId', controller.getSingleProduct);
router.post('/add-product', controller.addProduct);
router.delete('/delete-product/:productId', controller.deleteProductById);
// router.put('/update-room/:id', controller.updateRoom);

// Export All router..
module.exports = router;