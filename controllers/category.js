import Category from '../models/category'
import Product from '../models/products'

export const createCategory = async (request,response)=>{
    try {
        const category = await Category(request.body).save()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"Khong the tao moi"})
    }
}
export const listCategory = async(request,response)=>{
    try {
        const category = await Category.find().exec()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"Khong the hien thi"})
    }
}
export const listCategoryDetail = async (request,response)=>{
    try {
        const category = await Category.findOne({_id:request.params.id}).exec()
        // const product = await Product.find({category}).exec()
        const product = await Product.find({category}).populate("category").exec()
        // const product = await Product.find({category}).select("-category").exec()
        response.json({category,product})
    } catch (error) {
        response.status(400).json({message:"Khong the hien thi"})
    }
}
export const deleteCategory = (request,response)=>{}
export const updateCategory = (request,response)=>{}