
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Boolean, default: 0
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('user', UserSchema)