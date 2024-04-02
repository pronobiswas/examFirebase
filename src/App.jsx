
import { useState } from 'react';
import './App.css'
import { getDatabase, ref, set } from "firebase/database";

function App() {

  let [text , setText] = useState({
    fullname :"",
    age : "",
    male : "",
    female : "",
    design : "",
    development : ""

  });
  let [myarray, setMyarray] = useState([]);
  const db = getDatabase();


  let handleInput = (e)=>{
    setText(e.target.value);
    
  };
  let handleSubmit = ()=>{
    console.log(text);
    console.log(text.fullname);
    set(ref(db, 'users'), {
      fullname : text
    });
  };


  return (
    <>
      <h1>exam win firebase</h1>
      <input onChange={handleInput} type="text" name='fullname' placeholder='enter youyr name'/><br />
      <input onChange={handleInput} type="number" name='age' placeholder='enter your age'/>
      <br />
      <h4>gender</h4>
      <label htmlFor="male">male</label>
      <input onChange={handleInput} type="radio" id='male'  name ='gender'/>

      <label htmlFor="female">female</label>
      <input onChange={handleInput} type="radio" id='female' name='gender'/>
      <br />
      <h4>knoladge</h4>
      <label htmlFor="">web design</label>
      <input onChange={handleInput} type="checkbox" name='design'/><br />
      <label htmlFor="">web development</label>
      <input onChange={handleInput} type="checkbox" name='development'/>
      <br />
      <button onClick={handleSubmit}>submit</button>
    </>
  )
}

export default App
