import express from "express"
import { createDetailCart, deleteDetailCart, listDetailCart, listDetailCartById, updateDetailCart } from "../controllers/detailCart";


const router = express.Router();


router.get('/detailcart',listDetailCart )
router.get('/detailcart/:id',listDetailCartById)
router.post('/detailcart', createDetailCart )
router.delete('/detailcart/:id',deleteDetailCart)
router.put('/detailcart/:id',updateDetailCart)




export default router;