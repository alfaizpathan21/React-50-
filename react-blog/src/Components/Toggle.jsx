import React, { useDebugValue, useState } from 'react'

const Toggle = () => {
      const[display,setDisplay]=useState(false)
      const [count,setCount]=useState(0)

    
  return (
    <>
      {/* <h1> Toggle In react Js</h1>
      <button onClick={()=>setDisplay(!display)}>Toggle </button>

      {
        display? <h1>Alfaiz </h1>:<h1>No user Name</h1>
      } */}
      

      <div>
        <h1>multiple condition </h1>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Counter</button>

        {
            count==0? <h1>Condition 1</h1>:
            count==1? <h1>Condition 2</h1>:
            count==2? <h1>Condition 3</h1>:
            count==3? <h1>Condition 4</h1>:
            count==4? <h1>Condition 5</h1>:other

            }
      </div>
    </>

  )
}

export default Toggle
