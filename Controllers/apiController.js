var {Question} = require('../Models/Question')
let bodyParser = require('body-parser')

module.exports = (app) => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    
    app.post('/questions', (request, response) => {
        var todo = new Question({
            message: request.body.message,
            user: request.body.user
        })

        todo.save().then((doc) => {
            response.send(doc)
        }, (error) => {
            response.status(400).send({error})
        })
    })

    // app.get('/questions', (request, response) => {
    //     Question.find().then((questions) => {
    //         response.send({ questions })
    //     }, (error) => {
    //         response.status(400).send({error})
    //     })
    // })

    app.get('/questions/:user', (request, response) => {
        response.send(request.bodyParser)

        // Question.find({
        //     user: request.body.user
        // }).then(( questions) => {
        //     response.send({questions})
        // })
        // },(error) => {
        //     response.status(400).send({error})
    })
}