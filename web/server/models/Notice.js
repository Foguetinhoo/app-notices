import { Model, Schema } from 'mongoose'

const NoticeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required:true
    },
    categorys: [{
        idCategory:Schema.Types.ObjectId
    }],
    createdAt: {
        type: Date,
        default:Date.now()
    }
})


export default Model('Notice',NoticeSchema)