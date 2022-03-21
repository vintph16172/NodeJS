import express from "express";
import { createCategory, deleteCategory, listCategory, listCategoryDetail, updateCategory } from "../controllers/category";
const router = express.Router();

router.post("/category",createCategory)
router.get("/category",listCategory)
router.get("/category/:id",listCategoryDetail)
router.delete("/category/:id", deleteCategory)
router.put("/category/:id",updateCategory)

export default router