import { Router } from 'express'
import { loginUser, logOutUser, refreshAccessToken, registerUser } from '../controllers/user.controller.js'
import verifyJWT from '../middlewares/auth.middleware.js'
const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/refresh-token").get(refreshAccessToken)

// secured routes 
router.route("/logout").post(verifyJWT, logOutUser)
export default router