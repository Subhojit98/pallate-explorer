import { Router } from 'express'
import { loginUser, logOutUser, registerUser } from '../controllers/user.controller.js'
import verifyJWT from '../middlewares/auth.middleware.js'
const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)

// secured routes 
router.route("/logout").post(verifyJWT, logOutUser)
export default router