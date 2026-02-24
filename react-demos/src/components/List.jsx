import React from 'react'

const List = () => {

    const numbers = [1, 2, 3, 4, 5];

    const obj=[
        {
            name:"John",
            age:30
        },
        {
            name:"Jane",
            age:25
        },
        {
            name:"pathan",
            age:30
        }
    ]

  return (
     <main>
         
        {obj.map((user)=>(
            <ul key={Math.random()}>
                <li>{user.name}</li>
                <li>{user.age}</li>
            </ul>
        ))}
     </main>
  )
}

export default List
