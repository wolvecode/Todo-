const router = require('express').Router()
const { getTodo, deleteTodo, updateTodo } = require('../controllers/todoController')

router.get('/:id', getTodo)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)

module.exports = router
