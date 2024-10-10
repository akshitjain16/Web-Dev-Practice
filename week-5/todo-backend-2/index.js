const express = require('express')
const  app = express();
const jwt = require('jsonwebtoken')
const port = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
const { createTodo } = require('./types');
const { todo } = require('./db');


//routes 
app.post('/todo', async (req,res)=>{
  // validating schema 
  const createPayload=  req.body ;
  const parsedPayload  = createTodo.safeParse(createPayload)
  if(!parsedPayload.success){
    res.status(411).json({
      msg: "Ivalid Inputs"
    })
    return; 
  }
  //putting it in MongoDB 
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  });

  res.json({
    msg: "Todo created successfully"
  });
})

app.get('/todos', async (req,res)=>{
  const todos  =   await todo.find({});  // promise
  res.json ({
    todos 
  })
})

app.put('/completed',  async (req,res)=>{
  const markPayload=  req.body ;
  const parsedPayload  = markTodo.safeParse(markPayload)
  if(!parsedPayload.success){
    res.status(411).json({
      msg: "Ivalid Inputs"
    })
    return;
  }
  await todo.update({
    // mongoDb stores id in form of  _ID
    _id : req.body.id
   }, {
    completed: true
   })
   res.json({
    msg : "completed"
   })
})


app.listen(port, ()=>{
  console.log(`listning on port  ${port}`);
})


// steps :-
// first we create an http server 
// then we created validations using zod and implement it
// creating a database schema
// creating routes and then creating schema data
// now we have to put this schema in our database using mongoose in mongodb