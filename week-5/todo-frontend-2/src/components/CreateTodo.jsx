import React, { useState } from 'react'

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription]  = useState("")

  return (
   <>
   <div>
    {/* using state hook to change the value in input box */}
    <input style={{padding:10, margin:10}} type="text" placeholder='title' onChange={(e)=>{setTitle(e.target.value)}}/><br />
    <input style={{padding:10, margin:10}} type="text" placeholder='description' onChange={(e)=>{setDescription(e.target.value)}}/><br />

    <button style={{padding:10, margin:10 }}
      onClick={()=>{
        fetch("http://localhost:3000/todo", {
          method: "POST",
          body: JSON.stringify({
            "title" : title,
            "description": description
          }),
          headers : {
            "content-type": "application/json"
          }
        }).then(async(res)=>{
          const json  = res.json()
          alert("todo added")
        })
      }}
    >Add Todo</button>
   </div>
   </>
  )
}

export default CreateTodo