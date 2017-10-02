const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const _ = require('lodash')

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
            isAsync: true,
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

UserShema.methods.toJSON = function() {
    return _.pick(this.toObject(), ['_id', 'email'])
}

UserShema.methods.generateAuthToken = function() {
    var user = this
    var access = 'auth'
    var token = jwt.sign({_id: user._id.toHexString()}, 'malum').toString()
    user.tokens.push({access, token})
    return user.save().then(() => {
        return token
    })
}


UserShema.statics.findByToken = function(token) {
    var User = this
    var access = 'auth'
    var decoded

    try {
        decoded = jwt.verify(token, 'malum')
    } catch (error) {
        return Promise.reject()
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': access
    })
}

const User = mongoose.model('userModel',UserShema, 'Users')
module.exports = {User}