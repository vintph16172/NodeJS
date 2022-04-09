import mongoose, {ObjectId} from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
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
    },
    view:{
        type: Number,
        default: 0
    },
    status:{
        type: Number,
        default: 1
    },
    desc:{
        type: String
    }
},{timestamps:true})

export default mongoose.model('Product',productSchema)