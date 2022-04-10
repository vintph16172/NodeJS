import mongoose, {ObjectId} from "mongoose";

const couponSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sale:{
        type: Number,
        required:true
    },
    quantity:{
        type: Number,
        required:true
    }
},{timestamps:true})

export default mongoose.model('Coupon',couponSchema);