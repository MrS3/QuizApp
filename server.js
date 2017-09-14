var  express = require('express')
var bodyParser = require('body-parser')
var {mongose} = require('./mongoose')
var {UserModel} = require('./Models/User')
var {TodoModel} = require('./Models/Todo')

var app = express()
app.use(bodyParser.json())

app.post('/todos', (request, response) => {
    var todo = new TodoModel({
        title: request.body.title
    })
    todo.save().then((doc) => {
        response.send(doc)
    }, (error) => {
        console.log(error)
    })
})
app.listen(3000, () => { 
    console.log("Server started at port 3000")
})
