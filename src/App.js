import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/TodoList';


const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  return (
    <div className="App">
      <header>Thieves 105 To Do List</header>
      <Form inputText={inputText} todos={todos} setToDos={setToDos} setInputText={setInputText} />
      <ToDoList setToDos={setToDos} todos={todos}/>
    </div>
  );
}

export default App;
