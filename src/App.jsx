
import { useState } from 'react';
import './App.css'
import { getDatabase, ref, set } from "firebase/database";

function App() {

  let [person , setPerson] = useState({
    fullname :"",
    roll : "" , 
    selectOption : ""

  });
  let [personDetail, setPersonDetail] = useState([]);
  const db = getDatabase();


  let handleInput = (e)=>{
    let {name , value} = e.target;
    setPerson({...person , [name]  : value})
  };

  let handleSubmit = ()=>{
    let personDetailList = [...personDetail];
    personDetailList.push(person)
    setPersonDetail(personDetailList)
    

    set(ref(db, 'users'), {
    nam : personDetail
    });

    console.log(personDetailList);
    console.log(personDetail);
  };


  return (
    <>

      <div className="aForm">
      <h1>exam win firebase</h1>

        <label htmlFor="Nam">Name : </label>
        <input onChange={handleInput} type="text" name='fullname' placeholder='enter youyr name'/>
        <br />
        <label htmlFor="maillAddress">email  : </label>
        <input onChange={handleInput} type="email" placeholder='Enter your mail' id='maillAddress' name='yourMail'/>
        <br />
        <label htmlFor="roll">Roll : </label>
        <input onChange={handleInput} type="number" placeholder='Enter your roll number' name='roll' id='roll'/>
        <select onChange={handleInput} name="selectOption" id="selectOption">
          <option value="value1">option01</option>
          <option value="value2">option02</option>
          <option value="value3">option03</option>
          <option value="value4">option04</option>
        </select>
        
        <h4>Intearest In</h4>

        <label htmlFor="design">web design</label>
        <input type="checkbox" name='design' id='design'/>
        <br />
        <label htmlFor="development">web development</label>
        <input type="checkbox" name='development'/>
        <br />
        <label htmlFor="">design For develeopment</label>
        <input type="checkbox" name='development' id=''/>
        <br />


        <button onClick={handleSubmit}>submit</button>
      </div>
    </>
  )
}

export default App
