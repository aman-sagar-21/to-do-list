const express = require('express')
const router = express.Router();
const { getTodos, createNewTodo, removeTodo } = require('../controllers/todos')

router.route('/')
    .get(getTodos)
    .post(createNewTodo);

router.route('/:id').delete(removeTodo);

module.exports = router