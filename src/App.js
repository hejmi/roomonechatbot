import logo from './logo.svg';
import './App.css';
import Chatbot from "./components/chatbot";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to ROOM 1
        <img src={logo} className="App-logo" alt="logo" width="300" />
          <Chatbot></Chatbot>

      </header>
    </div>
  );
}

export default App;
