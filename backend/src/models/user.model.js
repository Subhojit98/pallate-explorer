import { model, Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const userSchema = Schema({

    firstName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    lastName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    fullName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    acceptConditions: {
        type: Boolean,
        required: true
    },
    refreshToken: {
        type: String,
    },
    savedPallates: [
        {
            type: Schema.Types.ObjectId,
            ref: "Image",
        }
    ],
    myUploades: [
        {
            type: Schema.Types.ObjectId,
            ref: "Image",
        }
    ]


}, {
    timestamps: true
})

// middlewares ->
userSchema.pre("save", async function (next) {

    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
        next()
    }

    else next()
})

// custom methods ->
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {

    return jwt.sign({
        _id: this._id,
        email: this.email,
        lastName: this.lastName
    },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPITY
        }
    )
}
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id,
    },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPITY
        }
    )
}


const User = model("User", userSchema)

export { User }