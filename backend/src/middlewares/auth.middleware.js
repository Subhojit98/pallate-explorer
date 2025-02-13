import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import asyncHandeler from "../utils/asyncHandeler.js";
import jwt from 'jsonwebtoken'

const verifyJWT = asyncHandeler(async (req, res, next) => {

    try {
        const token = req?.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

        if (!token) {
            throw new ApiError(401, "UnAuthorized access: Access token is not valid !!")
        }

        try {
            const decodedInfo = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

            const user = await User.findById(decodedInfo?._id).select("-password -refreshToken")

            if (!user) {
                throw new ApiError(401, "Invalid access token: User not found!")
            }

            req.user = user
            return next()
        } catch (error) {

            if (error.name === "TokenExpiredError") {
                return res.status(401)
                    .json({
                        message: "Access token is expired !!",
                        refreshRequired: true
                    })
            }

            throw new ApiError(403, "Invalid access token!")
        }

    }

    catch (error) {
        throw new ApiError(500, error?.message || "Auth middleware error !")
    }
})

export default verifyJWT