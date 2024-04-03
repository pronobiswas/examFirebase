
import { useState } from 'react';
import './App.css'
import { getDatabase, ref, set ,push } from "firebase/database";

function App() {

  let [person , setPerson] = useState({
    fullname :"",
    roll : "" , 
    selectOption : "",
    design : ""

  });
  let [personDetail, setPersonDetail] = useState([]);
  let [checkBoxValues , setCheckBoxValues] = useState([]);;
  const db = getDatabase();


  let handleInput = (e)=>{
    let {name , value ,checked} = e.target;
    setPerson({...person , [name]  : value});
    if(checked){
     setCheckBoxValues(pre => [...pre ,  value])
   }else{
    return [...checkBoxValues.filter(skill => skill == value)]
   }
   console.log(checkBoxValues);
  };

  let handleSubmit = ()=>{
    let personDetailList = [...personDetail];
    personDetailList.push(person)
    setPersonDetail(personDetailList)
    

    set(push(ref(db, 'users')), {
     person
    }).then(()=>{
      console.log("successFull");
    });

    
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
        <input onChange={handleInput} type="checkbox" name='design' id='design' value="webdesign"/>
        <br />
        <label htmlFor="development">web development</label>
        <input onChange={handleInput} type="checkbox" name='development' value="development"/>
        <br />
        <label htmlFor="development">design For develeopment</label>
        <input onChange={handleInput} type="checkbox" name='designedToDevolp' id='development' value="designedToDevelop" />
        <br />


        <button onClick={handleSubmit}>submit</button>
      </div>
      <div className="checkedBox">

      </div>
    </>
  )
}

export default App
