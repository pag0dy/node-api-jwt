const { todos, createTodo, updateTodo, deleteTodo } = require('../controllers/todo.controller');

const routes = require('express').Router();

routes.get('/', (req, res) => {
    return res.status(200).json({ msg: 'Welcome to the API'})
});

routes.get('/todos', todos);
routes.post('/todos', createTodo);
routes.put('/todos/:id', updateTodo);
routes.delete('/todos/:id', deleteTodo);

module.exports = routes;