const router = require('express').Router()
const { getAllTodos, addTodo } = require('../controllers/todoController')

router.get('/', getAllTodos)
router.post('/', addTodo)

module.exports = router