const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const validator = require('validator')

const  Schema = mongoose.Schema

var UserShema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim:true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            messaage: `{VALUE} is not a valid email`
        }
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
})

UserShema.methods.generateAuthToken = function() {

}

const UserModel = mongoose.model('userModel',userModelSchema, 'Todo')
module.exports = {UserModel}