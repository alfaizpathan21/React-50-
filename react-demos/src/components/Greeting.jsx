import React from 'react'


const Greeting = () => {
    const greet= "Hello, welcome to my website!";
    const date=new Date().toLocaleDateString();
  return (
    <div>
      <h1>{greet}</h1>
      <p>Today's date is: {date}</p>
    </div>
  )
}

export default Greeting
