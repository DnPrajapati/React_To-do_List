import React, { useEffect, useState } from 'react'
import './App.css';
import Navbar from './MyComponents/Navbar.js';
import TodoBody from './MyComponents/TodoBody.js';
import Footer from './MyComponents/Footer.js';

function App() {
  debugger
  const CheckLocal = () => {
    
    if (localStorage.getItem('TodoList')) {
      return JSON.parse(localStorage.getItem('TodoList'))
    } else {
      return []
    }
  }
  const saveLocal = () => localStorage.setItem('TodoList', JSON.stringify(TodoList));

  const onDelete = (todo) => setTodoList(TodoList.filter(x => x !== todo));

  const onEdit = (oldTodo, newTodo) => setTodoList(TodoList.map(x => JSON.stringify(x)===JSON.stringify(oldTodo)?newTodo:x))

  const addData = (newTodo) => setTodoList([...TodoList, newTodo]);

  const [TodoList, setTodoList] = useState(CheckLocal);

  useEffect(saveLocal, [TodoList])




  return (
    <div className="App">
      <Navbar/>
      <TodoBody TodoList={TodoList} onDelete={onDelete} onEdit={onEdit} addData={addData}/>
      <Footer />

    </div>
  );
}

export default App;
