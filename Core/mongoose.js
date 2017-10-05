var mongoose = require('mongoose')
mongoose.Promise = global.Promise
var databaseConnect = () => {
    mongoose.connect('mongodb://mongo:27017/ConferenceApp', (error) => {
        error ? console.log(error) : console.log('Conected to database')
    })
}
module.exports =  { databaseConnect }
