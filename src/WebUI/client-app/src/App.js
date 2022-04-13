import './App.css';
import HomePage from './pages/HomePage'


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
     <HomePage/>
    </div>
  );
}

export default App;
