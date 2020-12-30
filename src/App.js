import logo from './logo.svg';
import './App.css';
import Counter from "./Components/Counter";
import { Provider } from "react-redux";
import ReduxStore from "./Redux/store";
function App() {

  return (
    <div className="App">
      <Provider store={ReduxStore}>
        <Counter></Counter>
       
      </Provider>
    </div>
  );
}

export default App;
