import mongoose, {ObjectId} from "mongoose";

const cartSchema = new mongoose.Schema({
    user:{
        type: ObjectId,
        ref: "User"

    },
    name:{
        type:String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    phone:{
        type: Number,
        required:true
    },
    total:{
        type: Number,
        required:true
    },
    status:{
        type: Number,
        default: 0
    }
},{timestamps:true})

export default mongoose.model('Cart',cartSchema);