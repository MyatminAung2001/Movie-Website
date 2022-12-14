import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    // genre: {
    //     type: String,
    //     required: true,
    // },
    content: {
        type: Array,
        required: true
    }
}, { timestamps: true })

const List = mongoose.model("List", ListSchema);

export default List;