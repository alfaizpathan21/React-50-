import { TiShoppingCart } from "react-icons/ti";
import StyledCard from "./components/StyledCard";
import ProfileCard from "./components/ProfileCard";
import IconComponent from "./components/IconComponent";

const Button =()=>{
  const hnadleclick =()=>{ console.log(Math.round(Math.random()*101));
  }
  return <button onClick={hnadleclick}>Click</button>
} 


const Copy =()=>{

  const copyHandler=()=>{
    console.log("stop copying my content")
  }
  
  return(
    
    <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ad doloribus voluptatum odit, itaque, sed ea non cupiditate enim, autem aliquam. Blanditiis totam quis consequatur magni quia vero doloremque quisquam!</p>
  )
}

 const App = () => {
  return(
 
<section>
   
  <Copy/>
</section>



  // <section>
  // <TiShoppingCart />
  // <StyledCard/>
  // <ProfileCard/>
  // <IconComponent/>
  // </section>
   
 
  

  )
  
  
}

export default App;