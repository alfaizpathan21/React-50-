import React, { useState } from 'react'

const ToDo = () => {

  const[todo,setTodos]=useState([])
  const[inputvalue,setinputvalue]=useState('')
  
  const handleSubmit=(e)=>{ 

    e.preventDefault()

    if(inputvalue.trim()){
      setTodos([...todo,inputvalue])
      setinputvalue("")
    }
  }

  const handleChange=e=>{
    setinputvalue(e.target.value)
  }

  return (
    <div>
      <h1>TODO List</h1>
      <form  onSubmit={handleSubmit}>
        <input type="text" value={inputvalue} onChange={handleChange} placeholder='addtodo' />
        <button type='submit'>Add Todo</button>
      </form>

      <ul>
        {todo.map((todo,index)=>(
          <li key={index}>{todo}</li>
        ))}
      </ul>
      
      


    </div>
  )
}

export default ToDo
