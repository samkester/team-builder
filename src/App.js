import React, {useState} from 'react';
import logo from './logo.svg';
//import './App.css';
import {v4 as uuid} from "uuid";
import Member from "./Member";

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

function App() {
  const [members, setMembers] = useState(defaultMembers);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Roster</h1>
      </header>
      {members.map(item =>
        <Member key={item.id} member={item} />
      )}
      {/* render list of team members here */}
    </div>
  );
}

export default App;
