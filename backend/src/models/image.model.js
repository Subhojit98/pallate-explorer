import { model, Schema } from 'mongoose'


const imageSchema = Schema({

    image: {
        type: String,
    },

    colorPallets: {
        type: [String],
        required: true,
    },

    tags: {
        type: [String],
        required: true,
        index: true
    }
}, {
    timeStamps: true
}
)


const Image = model("Image", imageSchema)

export default Image