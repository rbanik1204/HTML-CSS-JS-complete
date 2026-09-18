import { createRazorpayInstance} from '../configs/razorpay.config.js'
import Product from '../models/product.model.js'
import {rupeesTopaisa} from '../utils/currency.js';
export const createOrder = async (req, res) => {
    try {
        const razorpay = createRazorpayInstance(); 
        const { productId } = req.body
        console.log(typeof productId)
        if (!productId) {
            return res.status(400).json({
                message: "product id is required",
                success: false
            });
        }
        //Get Product from MongoDB use findOne or findById
        const product = await Product.findOne({
            _id: productId
        });
        if (!product) return res.status(404).json({ success: false, message: "Product not found" })
        //Conversion to paisa - Server determines the amount
        const productPaise = rupeesTopaisa(product.amount);
        const options = {
            amount: productPaise,
            currency: "INR",
            receipt: `receipt_${Date.now()}`
        }
        const order = await razorpay.orders.create(options);
        return res.status(201).json({
            success: true,
            order
        });
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "unable to create razorpay order",
            success: false
        })
    }
}

