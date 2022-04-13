import express from "express";


import { listComment,listCommentDetail,createComment,deleteComment,updateComment } from "../controllers/comment";
const router = express.Router();

router.get("/comments",listComment)
router.get("/comments/:id",listCommentDetail)
router.post("/comments",createComment)
router.delete("/comments/:id", deleteComment)
router.put("/comments/:id",updateComment)



export default router