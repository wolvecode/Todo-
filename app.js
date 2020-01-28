const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const { NotFound, ServiceUnavailable } = require('./exceptions/Error')
const mongoose = require('mongoose')
const app = express()

const Todo = mongoose.model('Todo')

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
    Todo.find({})
        .then(todos => res.json({
            data: todos
        }))
        .catch(next)
})

app.post('/', (req, res, next) => {
    if (!req.body.title)
        return next(new NotFound('Bad request', 400))

    Todo.create(req.body)
        .then(todo => res.json(todo))
        .catch(e => next(error))
})

app.use((error, req, res, next) => {
   if (error.status >= 400 && error.status <= 499) {
        return res.status(error.status || 404).json({
            errorMessage: error.message
        })
   }

   next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 503).json({
        msg: 'Server temporary unavailable'
    })
})

module.exports = app