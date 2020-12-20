const mongoose, { Model, Schema } = require('mongoose')

const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


module.exports = Model('User', UserSchema)