const {Question} = require('../Models/Question')
const {User} = require('../Models/User')
const bodyParser = require('body-parser')
const {authenticate} = require('../Core/authenticate') 
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

    app.post('/questions', authenticate, (request, response) => {
        if (request.user) {
            var question = new Question({
                userID: request.user._id,
                message: request.body.message,
                userName: request.user.name
            })
            question.save().then((doc) => {
                response.status(200).send()
            }, (error) => {
                response.status(400).send({error})
            })
        } else {
            response.send(request.user)
        }
    })

    app.get('/questions', authenticate, (request, response) => {
        Question.find({'userID': request.user._id}).then((questions) => {
            response.send(questions)
        }, (error) => {
            response.status(400).send({error})
        })
    })
}