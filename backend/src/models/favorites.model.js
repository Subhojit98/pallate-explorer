import { model, Schema } from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const favoritesSchema = Schema({

    savedImages: {
        type: [Schema.Types.ObjectId],
        ref: "Image"
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timeStamps: true
})


favoritesSchema.plugin(mongooseAggregatePaginate)

const Favorites = model("Favorites", favoritesSchema)