// Require Post Schema from Model..
const User = require("../models/user")


/**
 * review
 */
exports.getUserByEmail = async (req, res) => {
    try {
        const param = req.params.userEmail;
        const data = await User.findOne({ email: param });

        res.status(200).json({
            message: 'Get User Successfully',
            data: data
        })
    }
    catch (err) {
        console.log(err);
    }
}
exports.addUser = async (req, res) => {
    console.log(req.body);
    try {
        const data = new User(req.body);
        await data.save();

        res.status(200).json({
            message: 'User added successfully',
            data: data
        })
    }
    catch (err) {
        console.log(err);
    }
}
exports.updateUser = async (req, res) => {
    console.log(req);
    try {

        const data = await User.updateOne(
            { email: req.body.email },
            { $set: { admin: true } },
            { upsert: true } // Make this update into an upsert
        );

        res.status(200).json({
            message: 'User updated successfully',
            data: data
        })
    }
    catch (err) {
        console.log(err);
    }
}