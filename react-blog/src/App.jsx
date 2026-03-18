import { useState } from "react"

 import Toggle from "./Components/Toggle"
 import User from "./Components/User"
import College from "./Components/College"
 const App = () => {

  let userObject={
    name:"Alfaiz"
    ,age:"23"
    ,email:"alfaiz@gmail.com"
  }
   
  let collegeNames=["iet","Du","IIt","NIt","MIT"]
  
   return (
     <div>
      <College name={collegeNames}/>
       {/* <Toggle/> */}
      {/* <User user={userObject} /> */}
     </div>
   )
 }
 
 export default App
 