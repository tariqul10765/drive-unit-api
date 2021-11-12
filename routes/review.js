// Main Module Required..
const express = require('express');

// Created Require Files..
const controller = require('../controller/review');

const router = express.Router();

/**
 * /review
 * http://localhost:5000/review
 */

router.get('/review-list', controller.reviewList);
router.post('/add-review', controller.addReview);
// router.delete('/delete-room/:id', controller.deleteRoomById);
// router.put('/update-room/:id', controller.updateRoom);

// Export All router..
module.exports = router;