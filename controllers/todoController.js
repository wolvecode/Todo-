const mongoose = require('mongoose')
const { NotFound, ServiceUnavailable } = require('../exceptions/Error')

const Todo = mongoose.model('Todo')

/**
 * Get all user added todos
 */
exports.getAllTodos = (req, res, next) => {
    Todo.find({})
        .then(todos => res.json({
            data: todos
        }))
        .catch(next)
}

/**
 * Add new todo to user Todo list
 */
exports.addTodo = (req, res, next) => {
    if (!req.body.title)
        return next(new NotFound('Bad request', 400))

    Todo.create(req.body)
        .then(todo => res.json(todo))
        .catch(e => next(error))
}

/**
 * Get a single todo by its ID
 */
exports.getTodo = (req, res, next) => {
    Todo.findById(req.params.id)
        .then(todo => res.json(todo))
        .catch(next)
}

/**
 * Update a single user todo on Todo list.
 */
exports.updateTodo = (req, res, next) => {
    Todo.findByIdAndUpdate(req.params.id, { done: req.body.done }, { upsert: true })
        .then(todo => res.json(todo))
        .catch(next)
}

/**
 * Delete a todo (by ID) on user Todo list
 */
exports.deleteTodo = (req, res, next) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(todo => res.json(todo))
        .catch(next)
}
