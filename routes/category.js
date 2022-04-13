import express from "express";

import { checkAuth, isAdmin, isAuth, requiredSigin } from '../middlewares/checkAuth'
import { userbyId } from '../controllers/user'
import { createCategory, deleteCategory, listCategory, listCategoryDetail, updateCategory } from "../controllers/category";
const router = express.Router();

router.get("/category",listCategory)
router.get("/category/:id",listCategoryDetail)
router.post("/category/:userId", requiredSigin,isAuth, isAdmin ,createCategory)
router.delete("/category/:id", deleteCategory)
router.put("/category/:id",updateCategory)

router.param("userId",userbyId)

export default router