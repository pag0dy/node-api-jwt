const Todo = require("../models/todo")

// List Todos
const todos = async (req, res) => {
    const todos = await Todo.find({})

    return res.status(200).json({
        status: 'Success',
        message: 'Todo list',
        data: todos
    })
}

// Create Todo
const createTodo = async (req, res) => {

    const { label } = req.body;

    const newTodo = await Todo.create({ label });

    const todo = await newTodo.save()

    return res.status(201).json({
        status: 'Success',
        message: 'Todo Created',
        data: todo
    })
}

// Modify Todo
const updateTodo = async (req, res) => {
    const { id } = req.params;
    const done = true;
    await Todo.findByIdAndUpdate(id, {done})

    return res.status(204).json({
        status: 'Success',
        message: 'Todo Updated',
        data: null
    })
}

// Delete Todo
const deleteTodo = async (req, res) => {
    const { id } = req.params;

    await Todo.findByIdAndUpdate(id);

    return res.status(200).json({
        status: 'Success',
        message: 'Todo Deleted',
        data: null
    })
}

module.exports = {
    todos, 
    createTodo,
    updateTodo,
    deleteTodo
}