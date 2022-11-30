let intialState = {
  list: [],
};
export const ToDoReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.payload.id,
            todo: action.payload.todo,
            completed: false,
          },
        ],
      };
    case "DELETE_ITEM":
      const newTodos = state.list.filter((data) => data.id !== action.payload);
      return {
        ...state,
        list: newTodos,
      };
    case "CLEAR_All":
      return {
        ...state,
        list: [],
      };
    case "UPDATE_TODO":
      let data = action.payload;
      const updatedTodos = [];
      // eslint-disable-next-line array-callback-return
      state.list.map((item) => {
        if (item.id === data.id) {
          item.id = data.todo;
          item.todo = data.todo;
          item.completed = data.completed;
        }
        updatedTodos.push(item);
      });
      return {
        list: updatedTodos,
      };
    default:
      return state;
  }
};
