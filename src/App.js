import Todos from "./components/Todos";
import "./css/main.css";
import Display from "./components/Display";


function App() {
  return (
    <div className="App">
      <h1>What plan for today?</h1>
      <Todos />
      <Display />
    </div>
  );
}

export default App;
