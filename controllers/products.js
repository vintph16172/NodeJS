
import Category from '../models/category'
import Product from '../models/products'
// const products = [
//     {id:1,name:"Product 1"},
//     {id:2,name:"Product 2"}
// ]

export const listProduct = async (request, response) => {
    console.log(request.query);
    const limitNumber = 20
    const search = request.query.name ? +request.query.name : "";
    const priceMin = request.query.price_gte ? +request.query.price_gte : "";
    const priceMax = request.query.price_lte ? +request.query.price_lte : "";
    const limit = request.query.limit ? +request.query.limit : limitNumber;
    const sortBy = request.query.sortBy ? request.query.sortBy : '_id';
    const order = request.query.order ? request.query.order : 'desc';
    try {

        if (search) {
            const re = new RegExp(`${search}`);
            console.log(re);
            const product = await Product.find({ name: re }).exec()
            response.json(product)
        } else if(priceMin && priceMax){
            const product = await Product.find().where('price').gte(priceMin).lte(priceMax).exec()
            response.json(product)
        }else {
            const product = await Product.find().exec()
            // const category = await Category.findOne({_id:product.category}).exec()
            console.log("abc");
            response.json(product)
            // response.json(products)
        }
    } catch (error) {
        response.status(400).json({ message: "Khong tim thay data" })
    }
}
export const listProductDetail = async (request, response) => {
    try {
        const product = await Product.findOne({ _id: request.params.id }).exec()
        response.json(product)
        // response.json(products)
    } catch (error) {
        response.status(400).json({ message: "Khong tim thay data" })
    }
    // const product = products.find(item => item.id === +request.params.id)
    // response.json(product)
}
export const createProduct = async (request, response) => {
    try {
        const product = await Product(request.body).save()
        response.json(product)
        // response.json(products)
    } catch (error) {
        response.status(400).json({ message: "Khong the tao moi" })
    }
    // products.push(request.body)
    // response.json(products)
}
export const deleteProduct = async (request, response) => {
    try {
        const product = await Product.findOneAndDelete({ _id: request.params.id }).exec()
        response.json(product);
    } catch (error) {
        response.status(400).json({ message: "Khong xoa duoc" })
    }
    // const product = products.filter(item => item.id != request.params.id)
    // response.json(product);
}
export const updateProduct = async (request, response) => {
    try {
        const product = await Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({ message: "Loi khong update duoc" })
    }
    // response.json(products.map(item => item.id === +request.params.id? request.body:item))
}

export const searchProduct = async (request, response) => {
    try {
        console.log(request.params.search);
        const search = "/" + request.params.search + "/i"
        console.log(2);
        console.log(search);
        const product = await Product.find({ name: search }).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({ message: "Không Tìm Thấy Sản Phẩm" })
    }

}




