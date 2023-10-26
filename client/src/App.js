import './App.css';
import {useState} from "react";
import axios from 'axios'


function App() {
  const[name, setName] = useState("");
  const[family, setFamily] = useState("");
  const[age, setAge] = useState(0);
  const[contry, setContry] = useState("");
  const[position, setPosition] = useState("");
  const[salary, setSalary] = useState(0);

  const save = () =>{
    axios.post("http://localhost:3001/save",{
      name: name,
      family: family,
      age: age,
      contry: contry,
      position: position,
      salary: salary
    }).then(()=>{
      console.log("f off")
    })
  }
  
  return (
    <div className="App">
      <div className="container">
        <label>Name:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        
        <label>Family:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setFamily(event.target.value);
          }}
        />

        <label>Age:</label>
        <input  
          type="number" 
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />

        <label>Contry:</label>
        <input  
          type="text" 
          onChange={(event) => {
            setContry(event.target.value);
          }}
        />

        <label>Position:</label>
        <input  
          type="text" 
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />

        <label>Salary:</label>
        <input  
          type="number" 
          onChange={(event) => {
            setSalary(event.target.value);
          }}
        />

        <button onClick={save}>Add</button>
      </div>
      
    </div>
  );
}

export default App;
