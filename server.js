require('./Config/config')
const  express = require('express')
const  mongose = require('./Core/mongoose')
const  apiController = require('./Controllers/apiController')
const  app = express()
const  port = process.env.PORT

mongose.databaseConnect()
apiController(app)

app.listen(port, () => { 
    console.log("Server started at port 3000")
})


module.exports = { app }