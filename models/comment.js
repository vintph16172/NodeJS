import mongoose from "mongoose";
const {ObjectId } = mongoose

const commentSchma = new mongoose.Schema({
    product:{
        type: ObjectId,
        ref:"Product"
    },
    user:{
        type:ObjectId,
        ref:'User'
    },
    rate:{
        type: Number,
        required:true
    },
    like:{
        type : Number,
        default: 0
    },
    status:{
        type: Number,
        default: 1
    },
    desc:{
        type: String,
        required:true
    }
},{timestamps:true})

export default mongoose.model('Comment',commentSchma)