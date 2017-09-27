const {Question} = require('../Models/Question')
const {User} = require('../Models/User')
const bodyParser = require('body-parser')
const  _ = require('lodash')

module.exports = (app) => {
    app.use(bodyParser.json())
    
    app.post('/user', (request, response) => {
        var body = _.pick(request.body,['name', 'email'])
        var user = new User(body)
        user.save().then(() => {
            return user.generateAuthToken()
        }).then((token) => {
            response.header('x-auth', token).send(user)
        }).catch( (error) => {
            response.status(400).send(error)
        })
    })

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