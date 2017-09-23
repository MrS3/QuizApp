const {Question} = require('../Models/Question')
const bodyParser = require('body-parser')

module.exports = (app) => {
    app.use(bodyParser.json())
    // app.use((error, request, response , next) => {
    //     response.status(500).send({
    //         status: error.status,
    //         message: error.message
    //     })
    // })
    
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

    app.get('/questions', (request, response) => {
        Question.find().then((questions) => {
            response.send({ questions })
        }, (error) => {
            response.status(400).send({error})
        })
    })

    app.get('/questions/:user', (request, response) => {
        Question.find({
            user: request.params.user
        }).then(( questions) => {
            response.send({questions})
        })
        },(error) => {
            response.status(400).send({error})
    })

    app.delete('/questions/:user', (request, response) => {
        Question.remove({ user: request.params.user}).then((questions) => {
            response.send({ questions})
        }).catch( (error) => {
            response.status(404).send()
        })    
    })
}