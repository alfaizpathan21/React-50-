import React from 'react'

const ComponentOne = ({count,onclickHandler}) => {

    const handleClick =()=>onclickHandler()
  return (
    <div>

      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default ComponentOne
