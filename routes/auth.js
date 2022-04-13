import express from "express"
import { signin, signup } from "../controllers/auth"
import { listUser,listUserDetail,deleteUser,updateUser } from '../controllers/user'
const router = express.Router()

router.get("/users",listUser)
router.get("/users/:id",listUserDetail)
router.put("/users/:id",updateUser)


router.post("/signup",signup)
router.post("/signin",signin)

export default router