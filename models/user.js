const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    displayName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false,
        required: false
    }
})

module.exports = mongoose.model('user', schema);