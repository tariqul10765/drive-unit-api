const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    uId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending',
        required: true
    },

})

module.exports = mongoose.model('order', schema);