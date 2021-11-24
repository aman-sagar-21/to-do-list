const Todo = require('../models/todo')

const getTodos = async(req, res) => {
    const todos = await Todo.find({})
    res.status(200).json({ todos })
}

const createNewTodo = async(req, res) => {
    const todo = await Todo.create(req.body)
    res.status(201).json({ todo });
}

const removeTodo = async(req, res) => {
    const { id: todoID } = req.params
    const todo = await Todo.findByIdAndDelete({ _id: todoID })
    res.status(200).json({ todo, msg: "todo deleted" })
}


module.exports = {
    getTodos,
    createNewTodo,
    removeTodo
}