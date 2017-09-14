const mongoose = require('mongoose')
var Shema = mongoose.Schema

var todoModelSchema = new Shema({
    title: {
        type: String,
        require: true,
        minlength: 1
    }
})


const TodoModel = mongoose.model('Todo', todoModelSchema)
module.exports = {TodoModel}


