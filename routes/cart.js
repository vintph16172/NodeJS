import express from "express"
import { createCart, deleteCart, listCart, listCartDetail, updateCart } from "../controllers/cart";


const router = express.Router();


router.get('/cart',listCart)
router.get('/cart/:id',listCartDetail)
router.post('/cart', createCart)
router.delete('/cart/:id',deleteCart)
router.put('/cart/:id',updateCart)




export default router;