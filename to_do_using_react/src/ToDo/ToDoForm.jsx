import React from "react";
import "./ToDoListCSS.css";
const ToDoForm = ({ handleSubmit, todo, setTodo, editId }) => {
  return (
    <div>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <input
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
            type="text"
          />
          <button>{editId ? "Update" : "Add"}</button>
        </form>
      </div>
    </div>
  );
};
export default ToDoForm;
