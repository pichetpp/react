
import './App.css';
import Employee from "./components/Employee";
import {useState} from 'react';

function App() { 
  const [role,setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App"> 
      {showEmployees ? 
      <>
      <input type='text' onChange={(e)=>{
        console.log(e.target.value);
        setRole(e.target.value);
      }}/>
        <Employee name="lspice" role="intern"/> 
        <Employee name="AA1" role={role}/> 
        <Employee name="AA2"/> 
      </>
      : 
      <p>no employee</p>     
      }
    </div>
  );
}

export default App;
