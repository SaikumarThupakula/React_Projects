import React from "react";
import "./ToDoListCSS.css";
const ToDoList = ({ todos, handleEditTodo, handleDelete, handleClear }) => {
  return (
    <div>
      <div>
        <ul className="myToDoList ">
          {todos.map((data) => (
            <li key={data.id}>
              {data.todo}
              <span className="edit">
                <i
                  className="fas fa-edit"
                  onClick={() => handleEditTodo(data.id)}
                  style={{ fontSize: "24px" }}
                ></i>
              </span>
              <span className="delete">
                <i
                  className="fa fa-trash-alt"
                  onClick={() => handleDelete(data.id)}
                  style={{ fontSize: "24px" }}
                ></i>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer">
        <span>You have {todos.length} unfinished tasks</span>
        <button className="clear" onClick={handleClear} type="button">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
