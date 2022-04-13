
import User from '../models/user'
import Product from '../models/products'
import Comment from '../models/comment'


export const listComment = async (request, response) => {
    try {

        const comment = await Comment.find().exec()
        response.json(comment)
       
    } catch (error) {
        response.status(400).json({ message: "Khong tim thay data" })
    }
}

export const listCommentDetail = async (request, response) => {
    try {
        const comment = await Comment.findOne({ _id: request.params.id }).exec()
        const products = await Product.find({_id: comment.product }).exec()
        const user = await User.find({_id: comment.user }).exec()
        response.json({comment,products,user})
        
    } catch (error) {
        response.status(400).json({ message: "Khong tim thay data" })
    }
    
}

export const createComment = async (request, response) => {
    try {
        const comment = await Comment(request.body).save()
        response.json(comment)
    } catch (error) {
        response.status(400).json({ message: "Khong the tao moi" })
    }
}

export const deleteComment = async (request, response) => {
    try {
        const comment = await Comment.findOneAndDelete({ _id: request.params.id }).exec()
        response.json(comment);
    } catch (error) {
        response.status(400).json({ message: "Khong xoa duoc" })
    }
}
export const updateComment = async (request, response) => {
    try {
        const comment = await Comment.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }).exec()
        response.json(comment)
    } catch (error) {
        response.status(400).json({ message: "Loi khong update duoc" })
    }
    
}




