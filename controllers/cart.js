
import Category from '../models/category'
import Product from '../models/products'
import Cart from '../models/cart'
import DetailCart from '../models/detailCart'

export const listCart = async (request, response) => {
    console.log(request.query);

    try {


        const cart = await Cart.find().exec()
        // const category = await Category.findOne({_id:product.category}).exec()
        console.log("abc");
        response.json(cart)
        // response.json(products)

    } catch (error) {
        response.status(400).json({ message: "Khong tim thay data" })
    }
}
export const listCartDetail = async (request, response) => {
    try {
        const cart = await Cart.findOne({ _id: request.params.id }).exec()
        const detailCart = await DetailCart.find({ cart }).populate("cart").exec()
        response.json({ cart, detailCart })
    } catch (error) {
        response.status(400).json({ message: "Khong tim thay data" })
    }
   
}
export const createCart = async (request, response) => {
    try {
        const cart = await Cart(request.body).save()
        response.json(cart)
        // response.json(products)
    } catch (error) {
        response.status(400).json({ message: "Khong the tao moi" })
    }
}
export const deleteCart = async (request, response) => {
    try {
        const cart = await Cart.findOneAndDelete({ _id: request.params.id }).exec()
        response.json(cart);
    } catch (error) {
        response.status(400).json({ message: "Khong xoa duoc" })
    }
}
export const updateCart = async (request, response) => {
    try {
        const cart = await Cart.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }).exec()
        response.json(cart)
    } catch (error) {
        response.status(400).json({ message: "Loi khong update duoc" })
    }
    
}






