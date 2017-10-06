var mongoose = require('mongoose')
mongoose.Promise = global.Promise
var databaseConnect = () => {
    mongoose.connect(process.env.MONGODB_URI , (error) => {
        error ? console.log(error) : console.log('Conected to database')
    })
}
module.exports =  { databaseConnect }
