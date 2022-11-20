import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
function App() {
  const [role, setRole] = useState("dev");
  const [employee, setEmployees] = useState([
    {
      name: "Lspice",
      role: "Developer",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      name: "Gry",
      role: "Manager",
      img: "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg",
    },
    {
      name: "Masha",
      role: "Account",
      img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg",
    },
    {
      name: "Teddy",
      role: "Tester",
      img: "https://images.pexels.com/photos/2530775/pexels-photo-2530775.jpeg",
    },
    {
      name: "Christian",
      role: "System Analyst",
      img: "https://images.pexels.com/photos/3186558/pexels-photo-3186558.jpeg",
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employee.map((employee) => { 
              console.log(uuidv4())
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  alt={employee.name}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>no employee</p>
      )}
    </div>
  );
}

export default App;
