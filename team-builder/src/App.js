import React, {useState} from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Form from './Components/Form';
import ListForm from './Components/ListForm';
// import "index.css";

function App() {
  const [list, setlist] = useState([
    {
      id: 1,
      member_name: 'Edwin',
    }
  ]);

  const addMember = member => {
    const newMember = {
      id: Date.now,
      member_name: member.member_name
    };
    setlist([...list,newMember]);
  }

  return (
    <div className="App">
      <h1>My Members</h1>
      <Form list ={list}/>
      <ListForm addMember={addMember}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;

