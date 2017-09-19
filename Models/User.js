const mongoose = require('mongoose')
const  Schema = mongoose.Schema

let userModelSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim:true
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
    }
})

const UserModel = mongoose.model('userModel',userModelSchema, 'Todo')
module.exports = {UserModel}