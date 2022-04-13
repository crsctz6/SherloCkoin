import React from 'react'
import '../App.css';
import TableComponent from '../components/TableComponent/TableComponent';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import TextCardComponent from '../components/TextCardComponent/TextCardComponent';
import {Button} from '../elements/ButtonElement'

 const tableData = [
  { no: "1",logo: "Logo", naming : 'Ethereum', cap: '$ 300,001,69', price:'$ 41,001', launch: '12 days', votes: '511,000', button:<Button tableButton={true}>Vote</Button>},  
  { no: "2",logo: "Logo", naming : 'Ethereum', cap: '$ 300,001,69', price:'$ 41,001', launch: '12 days', votes: '511,000', button:<Button tableButton={true}>Vote</Button>},
  { no: "3",logo: "Logo", naming : 'Ethereum', cap: '$ 300,001,69', price:'$ 41,001', launch: '12 days', votes: '511,000', button:<Button tableButton={true}>Vote</Button>},
  { no: "4",logo: "Logo", naming : 'Ethereum', cap: '$ 300,001,69', price:'$ 41,001', launch: '12 days', votes: '511,000', button:<Button tableButton={true}>Vote</Button>},
  { no: "5",logo: "Logo", naming : 'Ethereum', cap: '$ 300,001,69', price:'$ 41,001', launch: '12 days', votes: '511,000', button:<Button tableButton={true}>Vote</Button>},
  { no: "6",logo: "Logo", naming : 'Ethereum', cap: '$ 300,001,69', price:'$ 41,001', launch: '12 days', votes: '511,000', button:<Button tableButton={true}>Vote</Button>},
  { no: "7",logo: "Logo", naming : 'Ethereum', cap: '$ 300,001,69', price:'$ 41,001', launch: '12 days', votes: '511,000', button:<Button tableButton={true}>Vote</Button>},

];

 const tableHead=['#','Coin','Name','Market Cap','Price','Launch','Votes']
 const coinsType=['Top Coins','Coins']
function HomePage() {
  return (
    <div>      
    <TableComponent tableHead={tableHead} tableData={tableData} coinsType={coinsType[0]}/>
    <TableComponent tableHead={tableHead} tableData={tableData} coinsType={coinsType[1]}/>
    <TextCardComponent/>
    <FooterComponent/>
    </div>
  )
}

export default HomePage