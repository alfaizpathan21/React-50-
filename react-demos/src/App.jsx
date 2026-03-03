
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import JSXRules from "./components/JSXRules";
import List from "./components/List";
import MainContent from "./components/MainContent";
import Person from "./components/Person";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import UserList from "./components/UserList";

const App = () => {
  return(

 <div>
<Product name="Laptop" price="$999"/>
<Person name="John Doe" age={30}/>
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