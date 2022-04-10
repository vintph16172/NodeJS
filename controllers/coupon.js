
import Category from '../models/category'
import Product from '../models/products'
import Coupon from '../models/coupon'

export const listCoupon = async (request, response) => {
    console.log(request.query);
    try {
        const coupon = await Coupon.find().exec()
        response.json(coupon)

    } catch (error) {
        response.status(400).json({ message: "Khong tim thay data" })
    }
}
export const listCouponDetail = async (request, response) => {
    try {
        const coupon = await Coupon.findOne({ _id: request.params.id }).exec()
        response.json(coupon)
    
    } catch (error) {
        response.status(400).json({ message: "Khong tim thay data" })
    }
}
export const createCoupon = async (request, response) => {
    try {
        const coupon = await Coupon(request.body).save()
        response.json(coupon)

    } catch (error) {
        response.status(400).json({ message: "Khong the tao moi" })
    }
}
export const deleteCoupon = async (request, response) => {
    try {
        const coupon = await Coupon.findOneAndDelete({ _id: request.params.id }).exec()
        response.json(coupon);
    } catch (error) {
        response.status(400).json({ message: "Khong xoa duoc" })
    }
}
export const updateCoupon = async (request, response) => {
    try {
        const coupon = await Coupon.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }).exec()
        response.json(coupon)
    } catch (error) {
        response.status(400).json({ message: "Loi khong update duoc" })
    }
   
}





