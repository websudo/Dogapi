import './App.css';
import Greeting from './Components/Greeting'
import Home from './Components/Home'
import {useState} from 'react'

function App() {

  const [homedisp, sethome] = useState(
     { display : false}
  )

  function homeswitch(){
    console.log("hello")
    sethome( {display : true})
  }

  return (
    <div className="App">
     <Greeting home = {homeswitch}/>
     {homedisp.display && <Home homedisp ={homedisp}/>}
    </div>
  );
}

export default App;
