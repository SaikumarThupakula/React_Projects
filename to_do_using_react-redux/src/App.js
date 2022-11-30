import ToDoComponents from "./ReduxComponents/ToDoComponents";
import { Provider } from "react-redux";
import store from "./Redux/store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <ToDoComponents />
      </div>
    </Provider>
  );
}

export default App;
