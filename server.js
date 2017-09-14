const mongoose = require('mongoose')
const express = require('express')
const app = express()
const {userModel} = require('./Models/User')

mongoose.connect('mongodb://localhost/Todo', (error) => {
    error ? console.log(error) : console.log('Conected to database')
})

app.listen(3000, () => {
    console.log("Server started at port 300")
})
