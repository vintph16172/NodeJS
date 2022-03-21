import mongoose, {ObjectId} from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:ObjectId,
        ref:'Category'
    }
},{timestamps:true})

export default mongoose.model('Product',productSchema)