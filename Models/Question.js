const mongoose = require('mongoose')
const Shema = mongoose.Schema
const _ = require('lodash')

var QuestionShema = new Shema({
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userName: String,
    message: {
        type: String,
        require: true,
        minlength: 1
    }
})

QuestionShema.methods.toJSON = function() {
    return _.pick(this.toObject(), ['userName', 'message'])
}

const Question = mongoose.model('qestionModel', QuestionShema, 'Questions')
module.exports = {Question}