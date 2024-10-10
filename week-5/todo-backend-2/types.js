// for validating schema 

const zod  = require('zod')

const createTodo = zod.object({
  title : zod.string(),
  description: zod.string(), 
})

const markTodo  = zod.object({
  id: zod.string,
})

module.exports = {
  createTodo: createTodo,
  markTodo : markTodo
}