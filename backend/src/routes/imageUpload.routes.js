import { Router } from "express";
import verifyJWT from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";
import { getAllImages, uploadImage } from "../controllers/image.controller.js";

const router = Router()

router.post("/upload-custom-image", upload.single("customImage"), uploadImage)
router.get("/all-images", getAllImages)
export default router