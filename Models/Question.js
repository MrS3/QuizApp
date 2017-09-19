const mongoose = require('mongoose')
const Shema = mongoose.Schema

let questionShema = new Shema({
    message: {
        type: String,
        require: true,
        minlength: 1
    },
    user: {
        type: String,
        required: true
    }
})

const Question = mongoose.model('qestionModel', questionShema, 'Questions')
module.exports = {Question}