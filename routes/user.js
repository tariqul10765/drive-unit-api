// Main Module Required..
const express = require('express');

// Created Require Files..
const controller = require('../controller/user');

const router = express.Router();

/**
 * /user
 * http://localhost:5000/user
 */

router.get('/get-user-by-email/:userEmail', controller.getUserByEmail);
router.post('/add-user', controller.addUser);
router.put('/update-user', controller.updateUser);
// router.delete('/delete-room/:id', controller.deleteRoomById);

// Export All router..
module.exports = router;