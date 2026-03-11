import React from 'react'

const ComponentTwo = ({count,onclickHandler}) => {

  const handleClick=()=>onclickHandler()
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>decrement</button>
    </div>
  )
}

export default ComponentTwo
