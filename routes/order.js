// Main Module Required..
const express = require('express');

// Created Require Files..
const controller = require('../controller/order');

const router = express.Router();

/**
 * /order
 * http://localhost:5000/order
 */

router.get('/order-list', controller.orderList);
router.get('/get-single-user-order/:userEmail', controller.getSingleUserOrder);
router.post('/add-order', controller.addOrder);
router.delete('/delete-order/:orderId', controller.deleteOrderById);
router.put('/update-order/:orderId', controller.updateOrder);

// Export All router..
module.exports = router;