let  express = require('express')
let mongose = require('./mongoose')
let apiController = require('./Controllers/apiController')
let app = express()
let port = process.env.PORT || 3000

mongose.databaseConnect()
apiController(app)

app.listen(port, () => { 
    console.log("Server started at port 3000")
})
