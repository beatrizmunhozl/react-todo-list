import Form from './components/Form/form';
import { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList/toDoList';

function App() {
  
  const [toDo, setToDo] = useState([])

  const addToDo = (newToDo) => {
    setToDo([...toDo, newToDo])
  }
  
  const handleToDo = (item) => {
    const list = toDo.filter((element) => element !== item)
    setToDo([...list])
  }

  return (
    <div className="App">
      <Form addToDo={addToDo}/>
      
      <ToDoList toDo={toDo} handleToDo={handleToDo}/>
    </div>
  );
}

export default App;
