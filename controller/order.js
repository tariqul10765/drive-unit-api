// Require Post Schema from Model..
const Order = require("../models/order")


/**
 * order
 */
exports.addOrder = async (req, res) => {
    console.log(req.body);
    try {
        const data = new Order(req.body);
        await data.save();

        res.status(200).json({
            message: '',
            data: data
        })
    }
    catch (err) {
        console.log(err);
    }
}
exports.orderList = async (req, res) => {
    try {
        const data = await Order.find({});

        res.status(200).json({
            message: '',
            data: data
        })
    }
    catch (err) {
        console.log(err);
    }
}
exports.getSingleUserOrder = async (req, res) => {
    try {
        const param = req.params.userEmail;
        const data = await Order.find({ email: param });

        res.status(200).json({
            message: 'Get User Orders Successfully!',
            data: data
        })
    }
    catch (err) {
        console.log(err);
    }
}
exports.deleteOrderById = async (req, res) => {
    try {
        const param = req.params.orderId;
        const data = await Order.deleteOne({ _id: param });

        res.status(200).json({
            message: 'Order Deleted Successfully!!',
            data: data
        })
    }
    catch (err) {
        console.log(err);
    }
}
exports.updateOrder = async (req, res) => {
    try {
        const param = req.params.orderId;
        const data = await Order.updateOne(
            { _id: param },
            { $set: { status: 'shipped' } }
        );

        res.status(200).json({
            message: 'Order updated successfully',
            data: data
        })
    }
    catch (err) {
        console.log(err);
    }
}