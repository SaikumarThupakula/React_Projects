import { v4 as uuidv4 } from "uuid";
export const addTodo = (todo) => {
  return {
    type: "ADD_ITEM",
    payload: {
      id: uuidv4(),
      todo: todo,
      completed: false,
    },
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETE_ITEM",
    payload: id,
  };
};
export const clearAll = () => {
  return {
    type: "CLEAR_All",
  };
};
export const editTodoData = (payload) => {
  return {
    type: "UPDATE_TODO",
    payload,
  };
};
