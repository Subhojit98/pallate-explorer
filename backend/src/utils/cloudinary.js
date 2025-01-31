import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'


// Configuration ->

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {

    try {
        if (!localFilePath) return null
        const res = await cloudinary.uploader?.upload(localFilePath, {
            resource_type: "image",
        })

        console.log("File is uploaded on cloudinary.., URL: ", res?.url)
    } catch (error) {

        // remove the locally saved temp file if the upload fails
        fs.unlinkSync(localFilePath)
        console.log("Cloudinary File Upload Error: ", error.message)
        return null
    }
}

export { uploadOnCloudinary }