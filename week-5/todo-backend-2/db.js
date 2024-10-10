const mongoose = require('mongoose');
const { string, boolean } = require('zod');

mongoose.connect (
  "mongodb+srv://akshitjain:akshit1230@cluster0.5t5qw.mongodb.net/todos"
)


// creating database schema
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

// uploading in schema
const todo  = mongoose.model('todos', todoSchema); 

module.exports = {
  todo: todo
}