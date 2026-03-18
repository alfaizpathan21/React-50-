import React from 'react'

const College = ({name}) => {
    console.log()
  return (
    <div>
      <h1>College </h1>
    {name.map((name)=>(
        <li key={Math.random}>{name}</li>
    ))}
      
    </div>
  )
}

export default College
 