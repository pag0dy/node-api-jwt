const { todos, createTodo, updateTodo, deleteTodo } = require('../controllers/todo.controller');
const { createUser, loginUser } = require('../controllers/user.controller');
const auth = require('../middleware/auth');

const routes = require('express').Router();

routes.get('/', (req, res) => {
    return res.status(200).json({ msg: 'Welcome to the API'})
});

routes.get('/todos', auth, todos);
routes.post('/todos', auth, createTodo);
routes.put('/todos/:id', auth, updateTodo);
routes.delete('/todos/:id', auth, deleteTodo);

// Auth routes
routes.post('/signup', createUser);
routes.post('/signin', loginUser);

module.exports = routes;