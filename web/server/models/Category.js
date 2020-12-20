import {Schema,Model} from 'mongoose'

const CategorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


export default Model('Category',CategorySchema)