 import React, { useState } from 'react'
 
 const App = () => {

  const [movie,setMovie]=useState([
    {id:1,title:"spiderman",rating:3},
     {id:5,title:"batman",rating:13}

  ])
  
  const handlerclick=()=>{
  setMovie(
  movie.map((m)=>(m.id==1?{ ...movie,title:"john wick 5"}:m))
  )
  }
   return (
    
     <section>
      {movie.map(m=>(
        <li key={Math.random()}>{m.title}</li>
      ))}

      <button onClick={handlerclick}>Change movie name</button>
     </section>
   )
 }
 
 export default App

 
 
 
 
 