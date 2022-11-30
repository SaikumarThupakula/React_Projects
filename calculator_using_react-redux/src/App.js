// import logo from "./logo.svg";
// import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

import FormComponent from "./ReduxComponents/FormComponent";

function App() {
  return (
    <Provider store={store}>
      <div>
        <FormComponent />
      </div>
    </Provider>
  );
}

export default App;
