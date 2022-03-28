import { log } from 'console'
import Product from '../models/products'
// const products = [
//     {id:1,name:"Product 1"},
//     {id:2,name:"Product 2"}
// ]

export const listProduct = async (request,response)=>{
    try{
        const product = await Product.find().exec()
        console.log("abc");
        response.json(product)
        // response.json(products)
    }catch(error){
        response.status(400).json({message:"Khong tim thay data"})
    }
}
export const listProductDetail = async (request,response)=>{
    try{
        const product = await Product.findOne({_id:request.params.id}).exec()
        response.json(product)
        // response.json(products)
    }catch(error){
        response.status(400).json({message:"Khong tim thay data"})
    }
    // const product = products.find(item => item.id === +request.params.id)
    // response.json(product)
}
export const createProduct = async (request,response)=>{
    try{
        const product = await Product(request.body).save()
        response.json(product)
        // response.json(products)
    }catch(error){
        response.status(400).json({message:"Khong the tao moi"})
    }
    // products.push(request.body)
    // response.json(products)
}
export const deleteProduct = async (request,response)=>{
    try {
        const product = await Product.findOneAndDelete({_id:request.params.id}).exec()
        response.json(product);
    } catch (error) {
        response.status(400).json({message:"Khong xoa duoc"})
    }
    // const product = products.filter(item => item.id != request.params.id)
    // response.json(product);
}
export const updateProduct = async (request,response)=>{
    try {
        const product = await Product.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"Loi khong update duoc"})
    }
    // response.json(products.map(item => item.id === +request.params.id? request.body:item))
}

export const searchProduct = async (request,response)=>{
    try {
        const search = "/"+request.params.search+"/i"
        console.log(2);
        console.log(search);
        const product = await Product.find({name: search},'name').exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"Không Tìm Thấy Sản Phẩm"})
    }

}