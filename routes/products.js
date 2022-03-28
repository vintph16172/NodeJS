import express from "express"
import { createProduct, deleteProduct, listProduct, listProductDetail, searchProduct, updateProduct } from "../controllers/products";
const router = express.Router();


router.get('/products',listProduct)
router.get('/products/:id',listProductDetail)
router.post('/products', createProduct)
router.delete('/products/:id',deleteProduct)
router.put('/products/:id',updateProduct)
router.get('/products?name_like=:search',searchProduct)


export default router;