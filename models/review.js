const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    userName: {
        type: String,
        required: true
    },
    userImg: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('review', schema);