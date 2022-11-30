// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ToDoList from "./ToDo/ToDoList";
import ToDoForm from "./ToDo/ToDoForm";
import "./ToDo/ToDoListCSS.css";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editId) {
      const editTodo = todos.find((element) => element.id === editId);
      const updatedTodos = todos.map((element) =>
        element.id === editTodo.id
          ? { id: element.id, todo }
          : { id: element.id, todo: element.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }
    if (todo !== "") {
      const newTodos = [...todos, { id: `${todo}--${Date.now()}`, todo }];
      setTodos(newTodos);
      setTodo(" ");
    }
  };
  const handleDelete = (id) => {
    const newData = todos.filter((element) => element.id !== id);
    setTodos(newData);
  };
  const handleEditTodo = (id) => {
    const newTodo = todos.find((element) => element.id === id);
    setTodo(newTodo.todo);
    setEditId(id);
  };
  const handleClear = () => {
    setTodos([]);
  };
  return (
    <div className="App">
      <div id="container">
        <div className="header">
          <div className="heading">
            <h1>To Do List</h1>
          </div>
          <ToDoForm
            handleSubmit={handleSubmit}
            todo={todo}
            setTodo={setTodo}
            setEditId={setEditId}
          />
        </div>
        <ToDoList
          todos={todos}
          handleEditTodo={handleEditTodo}
          handleDelete={handleDelete}
          handleClear={handleClear}
        />
      </div>
    </div>
  );
}
export default App;
