import { model, Schema } from 'mongoose'


const imageSchema = Schema({

    imageUrl: {
        type: String,
        required: true,
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    colorPallets: {
        type: [String],
        required: true,
        index: true
    },

    tags: {
        type: [String],
        required: true,
        index: true
    }
}, {
    timestamps: true
}
)


const Image = model("Image", imageSchema)

export default Image