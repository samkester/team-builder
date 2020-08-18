import React, {useState} from 'react';
//import logo from './logo.svg';
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
  editExistingID: 0,
}

function App() {
  const [members, setMembers] = useState(defaultMembers);
  const [inputValues, setInputValues] = useState(defaultInputValues);

  const setSingleInputValue = (name, value) => {
    setInputValues({...inputValues, [name]: value});
  }

  const addMember = () => {
    const name = inputValues.name.trim();
    const email = inputValues.email.trim();
    const role = inputValues.role;
    if(name && email && role){
      if(inputValues.editExistingID){
        setMembers(members.map(item => {
          if(item.id === inputValues.editExistingID){
            return {...item, name, email, role};
          }
          return item;
        }))
      }
      else{
        setMembers([...members, {id: uuid(), name, email, role}]);
      }
      setInputValues(defaultInputValues);
    }
  }

  const editMember = (id) => {
    for(let i = 0; i < members.length; i++)
    {
      if(members[i].id === id)
      {
        setInputValues({name: members[i].name,
                        role: members[i].role,
                        email: members[i].email,
                        editExistingID: id});
      }
    }    
  }

  const stopEditMember = () => {
    setInputValues(defaultInputValues);
  }

  const submitForm = (event) => {
    event.preventDefault();
    addMember();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Roster</h1>
      </header>
      {members.map(item =>
        <Member key={item.id} member={item} edit={editMember}/>
      )}
      <Form values={inputValues} setValue = {setSingleInputValue} submitForm = {submitForm} cancelForm = {stopEditMember} />
    </div>
  );
}

export default App;
