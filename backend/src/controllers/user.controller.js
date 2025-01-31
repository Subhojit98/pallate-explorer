import asyncHandeler from '../utils/asyncHandeler.js'
import ApiError from '../utils/ApiError.js'
import ApiResponce from '../utils/ApiResponce.js'
import { User } from '../models/user.model.js'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const generateAccessTokenAndrefreshTokens = async (id) => {

    try {
        const user = await User.findById(id)

        if (!user) {
            throw new ApiError(404, "user not found! ! try again..")
        }

        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }

    } catch (error) {

        throw new ApiError(500, "something went wrong while createing tokens !!" || error.message)
    }
}

// for secure cookies so it can be editable from server
const cookieOptions = {
    httpOnly: true,
    secure: true
}
const registerUser = asyncHandeler(async (req, res) => {

    const { firstName, lastName, email, password, acceptConditions } = req?.body

    if ([firstName, lastName, email, password].some(feild => feild?.trim() === "")) {
        throw new ApiError(400, "Every feild must be fullfilled !!")
    }


    if (!emailRegex.test(email)) {
        throw new ApiError(400, "Email Must be in proper format!!")
    }

    if (!acceptConditions) {
        throw new ApiError(400, "Terms&conditions must be accepted!!")
    }

    const existedUser = await User.findOne({ email })

    if (existedUser) {
        throw new ApiError(409, "user with this email already exists !!")
    }

    const user = await User.create({
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
        email,
        password,
        acceptConditions
    })

    const registeredUser = await User.findById(user._id).select("-password -refreshToken")

    if (!registeredUser) {
        throw new ApiError(500, "something went wrong while registering the User.. ry again !!")
    }


    return res.status(201).json(
        new ApiResponce(200, registerUser, "user registered Successfully.")
    )

})

const loginUser = asyncHandeler(async (req, res) => {

    const { email, password } = req.body

    if (email === "" || !emailRegex.test(email)) {
        throw new ApiError(400, "provide correct email to preceed !!")
    }

    if (password === "") {
        throw new ApiError(400, "provide correct password to preceed !!")
    }

    const user = await User.findOne({ email })

    if (!user) {
        throw new ApiError(404, "User with this email is not found try again !!")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "User password is not correct !!")
    }

    const { refreshToken, accessToken } = await generateAccessTokenAndrefreshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    return res
        .status(200)
        .cookie("accessToken", accessToken)
        .cookie("refreshToken", refreshToken)
        .json(
            new ApiResponce(201,
                {
                    user: loggedInUser
                },
                "User logged in successfully.")
        )
})

const logOutUser = asyncHandeler(async (req, res) => {

    await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )

    return res
        .status(200)
        .clearCookie("accessToken", cookieOptions)
        .clearCookie("refreshToken", cookieOptions)
        .json(new ApiResponce(200, {}, "user loggeed out successfully"))
})
export { registerUser, loginUser, logOutUser }