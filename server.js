var  express = require('express')
var bodyParser = require('body-parser')
var {mongose} = require('./mongoose')
var {userModel} = require('./Models/User')



app.listen(3000, () => { 
    console.log("Server started at port 3000")
})
