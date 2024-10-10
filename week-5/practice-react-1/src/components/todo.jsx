import { useState } from 'react';

const Todo = () => {
  //it is like array [a,b] = 2  such  that  a gets value 2 and here setTodo is a fn wich update dom

//anny time a parent rerenders its children also gets re-rendered - react.memo to prevent this 
  const [todo, setTodo] = useState([]);

  function addTodo(){
    let  newTodo = [];
    for (let i =0 ; i<todo.length;i++){
      newTodo.push(todo[i])
    }
    newTodo.push({
      title:"new todo",
      description:"added as mstii" ,
  })
    setTodo(newTodo)


    //better way to do above thing
    // ...todo means objects/values jo phele se arry mein hai like 1st and 2nd then create 3rd then so on.    == [...todo,3]
    // setTodo([...todo,{
    //   title:"new todo",
    //   description:"added as mstii" ,
    // }])
  }

  return (
    <>
    <button style={{backgroundColor:'pink'}} onClick={addTodo}>Add a todo</button>
    <div>
      {todo.map((arr) => {  
        return (
          <Display title={arr.title} description={arr.description} key={arr.title} />
        );
      })}
    </div>
    </>
  );
};
  
//component function always start with capital letter  
// destructuring params
function Display({title},{description}) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{description}</h1>
    </div>
  );
}

export default Todo;
