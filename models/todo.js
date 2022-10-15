const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    done: {
        type: Boolean,
        required: true,
        default: false
    },
    label: {
        type: String, 
        required: true
    }
})

const Todo = new mongoose.model('Todo', TodoSchema);

module.exports = Todo;