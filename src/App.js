import React, {useState} from 'react';
import logo from './logo.svg';
//import './App.css';
import {v4 as uuid} from "uuid";
import Member from "./Member";
import Form from "./Form";

const defaultMembers = [
  {
    id: uuid(),
    name: "Sam",
    role: "head honcho",
    email: "samkester@gmail.com",
  },
  {
    id: uuid(),
    name: "React",
    role: "indispensable library",
    email: null,
  },
];

const defaultInputValues = {
  name: "",
  role: "",
  email: "",
}

function App() {
  const [members, setMembers] = useState(defaultMembers);
  const [inputValues, setInputValues] = useState(defaultInputValues);

  const setSingleInputValue = (name, value) => {
    setInputValues({...inputValues, [name]: value});
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Roster</h1>
      </header>
      {members.map(item =>
        <Member key={item.id} member={item} />
      )}
      <Form values={inputValues} setValue = {setSingleInputValue} />
    </div>
  );
}

export default App;
