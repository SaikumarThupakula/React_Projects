import React, { useState, useEffect } from "react";
import { addTodo, deleteTodo, clearAll, editTodoData } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import "./FormComponents.css";
const ToDoComponents = () => {
  const [todo, setTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [editForm, setEditForm] = useState(false);
  const [editValue, setEditValue] = useState("");
  const dispatch = useDispatch();
  console.log(useSelector((state) => state));
  const todos = useSelector((state) => state.ToDoReducer.list);

  const handleEdit = (todo) => {
    setEditForm(true);
    setEditTodo(todo);
  };
  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);
  const handleBackClick = () => {
    setEditForm(false);
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (todo !== "") {
      dispatch(addTodo(todo));
    }
    setTodo("");
  };
  const handleEditSubmit = (event) => {
    event.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
    };
    dispatch(editTodoData(editedObj));
  };
  return (
    <div className="App">
      <div id="container">
        <div className="header">
          <div className="heading">
            <h1>To Do List</h1>
          </div>
          {!editForm ? (
            <form onSubmit={handleSubmitForm}>
              <input
                type="text"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
                placeholder="Enter To Do"
              />
              <button>ADD</button>
            </form>
          ) : (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                value={editValue || ""}
                onChange={(event) => setEditValue(event.target.value)}
                placeholder="Enter To Do"
              />
              <button>update</button>
              <button onClick={handleBackClick} className="back">
                Back
              </button>
            </form>
          )}
        </div>
        <div>
          <ul className="myToDoList ">
            {todos.map((data) => (
              <li key={data.id}>
                {data.todo}
                {editForm ? null : (
                  <>
                    <span className="edit">
                      <i
                        className="fas fa-edit"
                        onClick={() => handleEdit(data)}
                        style={{ fontSize: "24px" }}
                      ></i>
                    </span>
                    <span className="delete">
                      <i
                        className="fa fa-trash-alt"
                        onClick={() => dispatch(deleteTodo(data.id))}
                        style={{ fontSize: "24px" }}
                      ></i>
                    </span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer">
          <span>You have {todos.length} unfinished tasks</span>
          <button
            className="clear"
            onClick={() => dispatch(clearAll())}
            type="button"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};
export default ToDoComponents;
