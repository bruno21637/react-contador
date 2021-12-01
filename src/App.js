import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [bb, setBb] = useState(0)
  let num = 0;
  function mais() {
    setBb (bb +1)
    
  }
    
  
  
  
  return (
    <div>
      <p>{bb}</p>
      <button onClick={mais}>Mais</button>
    </div>
  );
  }
export default App;
