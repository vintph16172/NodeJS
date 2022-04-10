import express from "express";
import { createCoupon, deleteCoupon, listCoupon, listCouponDetail,updateCoupon } from "../controllers/coupon";
const router = express.Router();

router.post("/coupon",createCoupon)
router.get("/coupon",listCoupon)
router.get("/coupon/:id",listCouponDetail)
router.delete("/coupon/:id", deleteCoupon)
router.put("/coupon/:id",updateCoupon)

export default router