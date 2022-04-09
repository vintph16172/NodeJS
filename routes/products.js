import express from "express"
import { test,createProduct, deleteProduct, listProduct, listProductDetail, searchProduct, updateProduct,productQuery } from "../controllers/products";
import { checkAuth, isAdmin, isAuth, requiredSigin } from '../middlewares/checkAuth'
import { userbyId } from '../controllers/user'
const router = express.Router();


router.get('/products',listProduct)
// router.get('/products',test)
router.get('/products/search',searchProduct)


router.get('/products/:id',listProductDetail)
router.post('/products/:userId', requiredSigin,isAuth, isAdmin , createProduct)
router.delete('/products/:id',deleteProduct)
router.put('/products/:id',updateProduct)


router.param("userId",userbyId)

export default router;