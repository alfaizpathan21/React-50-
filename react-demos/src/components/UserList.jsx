import React from 'react'

const UserList = () => {
    const users=[
        {
            id:"1",
            name:"alfaiz",
            age:22
        },
        {
            id:"2",
            name:"pathan",
            age:25
        },  {
            id:"3",
            name:"john",
            age:30
        }
    ]
  return (
  <main>
    {users.map(({id,name,age})=>(
        <div key={Math.random(id)}>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{age}</h3>
        </div>
    ))}
  </main>
  )
}

export default UserList
