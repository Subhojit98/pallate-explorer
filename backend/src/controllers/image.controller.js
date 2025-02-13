import Image from "../models/image.model.js";
import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponce from "../utils/ApiResponce.js";
import asyncHandeler from "../utils/asyncHandeler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const uploadImage = asyncHandeler(async (req, res) => {

    const tags = req?.body.tags
    const colorPallets = req?.body.colorPallets
    const userImage = req.file
    const loggedInUser = req?.user
    if (!userImage) {
        throw new ApiError(400, "Image file is not found !!")
    }

    const imageLocalpath = userImage.path

    if (!imageLocalpath) {
        throw new ApiError(400, "Image file path not found !!")
    }

    const userCustomImage = await uploadOnCloudinary(imageLocalpath)

    if (!userCustomImage) {
        throw new ApiError(500, "Image upload on cloudinary failed !!")
    }

    if (!tags) {
        throw new ApiError(400, "Tags are required !!")
    }

    // const user = await User.findById(loggedInUser._id).select("-password -refreshToken -myUploades -savedPallates")

    // if (!user) {
    //     throw new ApiError(404, "image uploader user not found !!")
    // }

    // const image = await Image.create({
    //     imageUrl: userCustomImage.url,
    //     user: user._id,
    //     colorPallets,
    //     tags
    // })
    const image = await Image.create({
        imageUrl: userCustomImage.url,
        colorPallets,
        tags
    })

    if (!image) {
        throw new ApiError(500, "image not saved on database !!")
    }

    const userUploadedCustomImage = await Image.findById(image._id)

    if (!userUploadedCustomImage) {
        throw new ApiError(500, "image is not stored on database !!")
    }


    // await User.findByIdAndUpdate(user._id, {
    //     $push: {
    //         myUploades: userUploadedCustomImage._id
    //     }
    // })

    return res.status(200)
        .json(new ApiResponce(201, userUploadedCustomImage, "image uploaded succussfully"))

})

const getAllImages = asyncHandeler(async (_, res) => {

    const images = await Image.find({})

    if (!images) {
        throw new ApiError(500, "No images found !!... please try again.")
    }

    return res.status(200)
        .json(new ApiResponce(200, images, "images found succussfully"))
})
export { uploadImage, getAllImages }