
import Category from '../models/category'
import Product from '../models/products'
import Cart from '../models/cart'
import DetailCart from '../models/detailCart'

export const listDetailCart = async (request, response) => {
    console.log(request.query);

    try {


        const detailCart = await DetailCart.find().exec()
        // const category = await Category.findOne({_id:product.category}).exec()
        console.log("abc");
        response.json(detailCart)
        // response.json(products)

    } catch (error) {
        response.status(400).json({ message: "Khong tim thay data" })
    }
}
export const listDetailCartById = async (request, response) => {
    try {
        const detailCart = await DetailCart.findOne({ _id: request.params.id }).exec()
        
        response.json(detailCart)
    } catch (error) {
        response.status(400).json({ message: "Khong tim thay data" })
    }
   
}
export const createDetailCart = async (request, response) => {
    try {
        const detailCart = await DetailCart(request.body).save()
        response.json(detailCart)
        // response.json(products)
    } catch (error) {
        response.status(400).json({ message: "Khong the tao moi" })
    }
}
export const deleteDetailCart = async (request, response) => {
    try {
        const detailCart = await DetailCart.findOneAndDelete({ _id: request.params.id }).exec()
        response.json(detailCart);
    } catch (error) {
        response.status(400).json({ message: "Khong xoa duoc" })
    }
}
export const updateDetailCart = async (request, response) => {
    try {
        const detailCart = await DetailCart.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }).exec()
        response.json(detailCart)
    } catch (error) {
        response.status(400).json({ message: "Loi khong update duoc" })
    }
    
}






