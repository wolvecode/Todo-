const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const { handleError, handleServerError } = require('./exceptions/errorHandlers')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const Todo = mongoose.model('Todo')

app.use(helmet())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', require('./routes/index'))
/**
 * Route for handling todos actions
 */
app.use('/todo', require('./routes/todo'))

app.use(handleError)

app.use(handleServerError)

module.exports = app