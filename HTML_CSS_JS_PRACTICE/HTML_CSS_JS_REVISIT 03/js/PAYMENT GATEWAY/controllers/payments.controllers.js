import { createRazorpayInstance as razorpay} from '../configs/razorpay.config.js'
import Product from '../models/product.model.js'
import { rupeesTopaisa } from '../utils/currency.js';
export const createOrder = async (req,res)=>{
    const { productId } = req.body
    if(!productId){
        return res.status(400).json({
            message:"product id is required",
            success:false
        });
    }
    //Get Product from MongoDB use findOne or findById
    const product = await Product.findOne({
        _id: productId
    });
    if(!product) return res.status(404).json({success:false,message:"Product not found"})
    //Conversion to paisa
    const productPaise = rupeesTopaisa(product.amount);
    const options = {
        amount:productPaise,
        currency: "INR",
        receipt:`receipt_${Date.now()}`
    }
}

