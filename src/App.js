import Todos from './components/Todos'
import './App.css';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <h1>My list</h1>
      <Todos />
      <Display />
    </div>
  );
}

export default App;
