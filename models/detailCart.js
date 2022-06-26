import mongoose from "mongoose";

const { ObjectId } = mongoose

const detailCartSchema = new mongoose.Schema({
    cart:{
        type: ObjectId,
        ref: "Cart"

    },
    product:{
        type: String,
        required:true
    },
    quantity:{
        type: Number,
        required:true
    },
    total:{
        type: Number,
        required:true
    }
},{timestamps:true})

export default mongoose.model('DetailCart',detailCartSchema);