 import React, { useState } from 'react'
 
 const Profile = () => {

  const [Profile,setProfile]=useState({
    name:"",
    age:""
  })
  
  const handleChange=(e)=>{
    const{name,value}=e.target;

    setProfile((prevProfile)=>({
      ...prevProfile,
      [name]:value
    }))
  }
   return (
     <div>
       <h2></h2>
       <div>
       <label htmlFor="">Name: 
        <input type="text" name='name' value={Profile.name} onChange={handleChange} />
        </label>
        
       </div>
        <div>
       <label htmlFor="">Age: 
        <input type="number" name='age' value={Profile.age} onChange={handleChange} />
        </label>
        
       </div>

       <h3>Profile information</h3>
       <p>Name: {Profile.name}</p>
       <p>Age: {Profile.age} </p>
     </div>
   )
 }
 
 export default Profile

 
 
 