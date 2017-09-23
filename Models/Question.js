const mongoose = require('mongoose')
const Shema = mongoose.Schema

var QuestionShema = new Shema({
    user: String,
    message: {
        type: String,
        require: true,
        minlength: 1
    }
})

const Question = mongoose.model('qestionModel', QuestionShema, 'Questions')
module.exports = {Question}