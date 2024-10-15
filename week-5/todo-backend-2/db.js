const mongoose = require('mongoose');
const { string, boolean } = require('zod');

mongoose.connect (
  "mongo-db-url"
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