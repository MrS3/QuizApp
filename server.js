const mongoose = require('mongoose')
const express = require('express')
const app = express()
const {userModel} = require('./Models/User')

mongoose.connect('mongodb://localhost/Todo', () => {
    console.log
})

app.listen(3000, () => {
    console.log("Server started at port 300")
})
