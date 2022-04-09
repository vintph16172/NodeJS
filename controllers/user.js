import User from "../models/user";

export const userbyId = async (request,response,next,id)=>{
    try {
        const user = await User.findById(id).exec()
        if(!user){
            return response.status(400).json({message:"User khong ton tai"})
        }
        request.profile = user
        request.profile.password = undefined
        request.profile.salt = undefined
        next()
    } catch (error) {
        console.log(error);
    }
}