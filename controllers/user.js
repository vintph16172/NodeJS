import User from "../models/user";

export const listUser = async (request, response) => {
    try {
        const user = await User.find().exec()
        response.json(user)
    } catch (error) {
        response.status(400).json({ message: "Khong the hien thi" })
    }
}
export const listUserDetail = async (request, response) => {
    try {
        const user = await User.findOne({ _id: request.params.id }).exec()
        
       
        user.salt = undefined
        response.json(user)
    } catch (error) {
        response.status(400).json({ message: "Khong the hien thi" })
    }
}
export const deleteUser = async (request, response) => {
    try {
        const user = await User.findOneAndDelete({ _id: request.params.id }).exec()
        response.json(user)
    } catch (error) {
        response.status(400).json({ message: "Khong the hien thi" })
    }
}
export const updateUser = async (request, response) => {
    try {
        const user = await User.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }).exec()
        response.json(user)
    } catch (error) {
        response.status(400).json({ message: "Khong the update" })
    }
}



export const userbyId = async (request, response, next, id) => {
    try {
        const user = await User.findById(id).exec()
        if (!user) {
            return response.status(400).json({ message: "User khong ton tai" })
        }
        request.profile = user
        request.profile.password = undefined
        request.profile.salt = undefined
        next()
    } catch (error) {
        console.log(error);
    }
}