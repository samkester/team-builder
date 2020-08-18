import React, {useState} from 'react';
//import logo from './logo.svg';
//import './App.css';
import {v4 as uuid} from "uuid";
import Member from "./Member";
import Form from "./Form";
import styled from "styled-components";

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
    email: "",
  },
];

const defaultInputValues = {
  name: "",
  role: "",
  email: "",
  editExistingID: 0,
}

const StyledApp = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.mainTextColor};

  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1{
    color: ${props => props.theme.headingTextColor};
    background-color: ${props => props.theme.highlightBackgroundColor};

    font-size: 3.2rem;

    padding: 0 2rem 0.5rem;
    border-radius: 0 0 1rem 1rem;
    
    margin-bottom: 4rem;
  }
`;

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
    <StyledApp>
      <header>
        <h1>Team Roster</h1>
      </header>
      {members.map(item =>
        <Member key={item.id} member={item} edit={editMember} isActive={inputValues.editExistingID === item.id}/>
      )}
      <Form values={inputValues} setValue = {setSingleInputValue} submitForm = {submitForm} cancelForm = {stopEditMember} />
    </StyledApp>
  );
}

export default App;
