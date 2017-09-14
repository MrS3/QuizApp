var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/Todo', (error) => {
    error ? console.log(error) : console.log('Conected to database')
})
module.exports = {mongoose}