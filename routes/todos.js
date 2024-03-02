const express = require('express')
const router = express.Router()
const { CreateToDo } = require('../controller/CreateToDo')
const { getTodo, getTodoById } = require("../controller/getTodo")
const { updateTodo } = require('../controller/updateToDo')
const { deleteTodo } = require('../controller/deleteToDo')


// import Controller
router.post('/createToDo', CreateToDo)
router.get('/getTodos', getTodo)
router.get('/getTodos/:id', getTodoById)
router.put('/updateToDo/:id', updateTodo)
router.delete('/deleteToDo/:id', deleteTodo)

module.exports = router;