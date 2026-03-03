import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

 


const ValidPassword =()=> <h1> Valid Password</h1>
 const InvalidPassword =()=> <h1> Invalid Password</h1>

 const  Cart =()=>{
  const items =[ "wirless earbuds","power bank"," New SSD","HOddies" ];

  return(
    <div>
      <h1>Cart </h1>
  {items.length >0 && <h2> you have {items.length} items in your cart</h2>}

<ul>
  <h4 >Products</h4>
  {items.map(items=>(
    <li key={Math.random()}>{items}</li>
  ))}
</ul>
    </div>
  )
 }

 const Password=({isvalid})=>{
 // if(isvalid){
  //  return<ValidPassword/>
  //}
 // return <InvalidPassword/>

 return isvalid? <ValidPassword/>:<InvalidPassword/>;
 }

const App = () => {
  return(

 <div>
  <Weather temps={247}/>

  <UserStatus loggedIn={true} isAdmin={false} />
<Cart/>
  <Password isvalid={false}/>

  

  
  
 
 </div>
   
 
  

  )
  
  
}

const User=(props)=>{
  return(
    <section>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
      <h1>Is Married: {props.ismarried ? "Yes" : "No"}</h1>
      <h2>Hobbies:</h2>
      <ul>
        {props.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  )
}

export default App;