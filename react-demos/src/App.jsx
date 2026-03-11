 import React, { useState } from 'react'
import ComponentOne from './components/ComponentOne'
import ComponentTwo from './components/ComponentTwo'
import TO_DO from './components/ToDo'
 
 const App = () => {
  const [count,setCount]=useState(0)
  
  
   return (
    
    
    <section>

     
      <TO_DO />

    </section>
   )
 }
 
 export default App
 