import './App.css';
import CoinDetails from './pages/CoinDetails';
import GetListed from './pages/GetListed';
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
     {/* <HomePage/> */}
     {/* <CoinDetails/> */}
     <GetListed/> 
    </div>
  );
}

export default App;
