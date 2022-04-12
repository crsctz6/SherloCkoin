import './App.css';
import TableComponent from './components/TableComponent/TableComponent';

const promotedTableData = [
  { no: "1",logo: "Logo", naming : 'Ethereum', cap: '$ 300,001,69', price:'$ 41,001', launch: '12 days', votes: '511,000'},  
  { no: "2",logo: "Logo", naming : 'Ethereum', cap: '$ 300,001,69', price:'$ 41,001', launch: '12 days', votes: '511,000'},
  { no: "3",logo: "Logo", naming : 'Ethereum', cap: '$ 300,001,69', price:'$ 41,001', launch: '12 days', votes: '511,000'},
  { no: "4",logo: "Logo", naming : 'Ethereum', cap: '$ 300,001,69', price:'$ 41,001', launch: '12 days', votes: '511,000'},
  { no: "5",logo: "Logo", naming : 'Ethereum', cap: '$ 300,001,69', price:'$ 41,001', launch: '12 days', votes: '511,000'},
  { no: "6",logo: "Logo", naming : 'Ethereum', cap: '$ 300,001,69', price:'$ 41,001', launch: '12 days', votes: '511,000'},
  { no: "7",logo: "Logo", naming : 'Ethereum', cap: '$ 300,001,69', price:'$ 41,001', launch: '12 days', votes: '511,000'},

];

 const tableHead=['#','Coin','Name','Market Cap','Price','Launch','Votes','Vote column']

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
      <TableComponent tableHead={tableHead} promotedTableData={promotedTableData}/>
    </div>
  );
}

export default App;
