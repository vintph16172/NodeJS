import mongoose from 'mongoose'
import {createHmac} from 'crypto'
import { v4 as uuidv4 } from 'uuid'

const userSchema = new mongoose.Schema({
    avatar:{
        type: String,
        required:true
    },
    name:{
        type: String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type: Number,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    role:{
        type: Number,
        default: 0
    },
    salt:{
        type: String
    }
},{timestamps:true})

userSchema.pre("save",function(next){
    try {
        this.salt = uuidv4()
        this.password = this.encrytPassword(this.password)
        next()
    } catch (error) {
        console.log(error);
    }
})

userSchema.methods = {
    authenticate(password){
        try {
           return this.password === this.encrytPassword(password)
        } catch (error) {
            console.log(error);
        }
    },

    encrytPassword(password){
        if(!password) return
        try {
            return createHmac("sha256",this.salt).update(password).digest("hex")
        } catch (error) {
            console.log(error);
        }
    }

}




export default mongoose.model("User",userSchema)