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
// router.get('/get-single-room/:id', controller.getRoomById);
// router.post('/add-room', controller.addRoom);
// router.delete('/delete-room/:id', controller.deleteRoomById);
// router.put('/update-room/:id', controller.updateRoom);

// Export All router..
module.exports = router;