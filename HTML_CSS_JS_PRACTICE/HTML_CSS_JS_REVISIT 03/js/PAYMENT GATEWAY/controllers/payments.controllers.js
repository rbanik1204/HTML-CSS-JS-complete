const createRazorpayInstance = require('../configs/razorpay.config')
exports.createOrder = async (req,res)=>{
    // Do not take amount from client
    const {courseId, amt} = req.body;
    const options = {
        amount: amount*100,
        currency:"INR", // amount in smallest currency unit
        receipt:"receipt_order_1"
    };
    try{
        createRazorpayInstance.orders.create(options,(err,order)=>{
            if(err){
                return res.status(500).json({message:"Internal Server Error"})
            }
            return res.status(200).json(order);
        })
    }
    catch(error){
        return res.status(401).json({message:"unauthorized"})
    }
}