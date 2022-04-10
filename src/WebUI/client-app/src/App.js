import logo from './logo.svg';
import './App.css';

function App() {
  fetch('https://localhost:5001/api/Coin?PageNumber=1&PageSize=10',
  
    {
      method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
    
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
