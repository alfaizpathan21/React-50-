 import React, { useState } from 'react'
 
 const App = () => {

  const [friend,setFriend]=useState(["omkar","hpn"])
  
  const addonefriend=()=>setFriend([...friend,"alfaiz"])
  const removefriend=()=>setFriend(friend.filter((f)=>f!="hpn"))
  return (
      <section>
        {friend.map(f=>(
          <li key={Math.random()}>{f}</li>
        ))}


<button onClick={addonefriend}>Add new friend</button>
<button onClick={removefriend}>remove friend</button>
        
      </section>
   )
 }
 
 export default App
 