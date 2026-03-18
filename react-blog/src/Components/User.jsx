import React from 'react'

const User = ({user}) => {

  return (
    <div>
    <h1>Name:{user.name}</h1> 
    <h2>Age:{user.age}</h2>

    </div>
  )
}

export default User
