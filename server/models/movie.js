import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    imagePoster: {
        type: String,
        required: true,
    },
    imagePosterTwo: {
        type: String,
        required: true,
    },
    imagePosterThree: {
        type: String,
        required: true,
    }, 
    imagePosterFour: {
        type: String,
        required: true,
    },
    trailer: {
        type: String,
        required: true,
    },
    produced: {
        type: String,
        required: true,
    },
    limit: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    isSeries: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;