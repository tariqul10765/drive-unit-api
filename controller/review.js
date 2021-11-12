// Require Post Schema from Model..
const Review = require("../models/review")


/**
 * review
 */
exports.reviewList = async (req, res) => {
    try {
        const data = await Review.find({});

        res.status(200).json({
            message: 'Get Review List Successfully',
            data: data
        })
    }
    catch (err) {
        console.log(err);
    }
}
exports.addReview = async (req, res) => {
    try {
        const data = new Review(req.body);
        await data.save();

        res.status(200).json({
            message: 'review added successfully',
            data: data
        })
    }
    catch (err) {
        console.log(err);
    }
}