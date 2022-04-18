import React,  { useState,useEffect  } from "react";
import "../App.css";
import TableComponent from "../components/TableComponent/TableComponent";
import TextCardComponent from "../components/TextCardComponent/TextCardComponent";
import { Button } from "../elements/ButtonElement";
import Header from "../components/Header/Header";
import {CoinClient} from "../components/SheloCkoinApi.ts"
// const tableData = [
//   {
//     no: "1",
//     logo: "Logo",
//     naming: "Ethereum",
//     cap: "$ 300,001,69",
//     price: "$ 41,001",
//     launch: "12 days",
//     votes: "511,000",
//     button: <Button tableButton={true}>Vote</Button>,
//   },
//   {
//     no: "2",
//     logo: "Logo",
//     naming: "Ethereum",
//     cap: "$ 300,001,69",
//     price: "$ 41,001",
//     launch: "12 days",
//     votes: "511,000",
//     button: <Button tableButton={true}>Vote</Button>,
//   },
//   {
//     no: "3",
//     logo: "Logo",
//     naming: "Ethereum",
//     cap: "$ 300,001,69",
//     price: "$ 41,001",
//     launch: "12 days",
//     votes: "511,000",
//     button: <Button tableButton={true}>Vote</Button>,
//   },
//   {
//     no: "4",
//     logo: "Logo",
//     naming: "Ethereum",
//     cap: "$ 300,001,69",
//     price: "$ 41,001",
//     launch: "12 days",
//     votes: "511,000",
//     button: <Button tableButton={true}>Vote</Button>,
//   },
//   {
//     no: "5",
//     logo: "Logo",
//     naming: "Ethereum",
//     cap: "$ 300,001,69",
//     price: "$ 41,001",
//     launch: "12 days",
//     votes: "511,000",
//     button: <Button tableButton={true}>Vote</Button>,
//   },
//   {
//     no: "6",
//     logo: "Logo",
//     naming: "Ethereum",
//     cap: "$ 300,001,69",
//     price: "$ 41,001",
//     launch: "12 days",
//     votes: "511,000",
//     button: <Button tableButton={true}>Vote</Button>,
//   },
//   {
//     no: "7",
//     logo: "Logo",
//     naming: "Ethereum",
//     cap: "$ 300,001,69",
//     price: "$ 41,001",
//     launch: "12 days",
//     votes: "511,000",
//     button: <Button tableButton={true}>Vote</Button>,
//   },
// ];

const tableHead = [
  "#",
  "Coin",
  "Name",
  "Market Cap",
  "Price",
  "Launch",
  "Votes",
];
const coinsType = ["Top Coins", "Coins"];

const callApi = async () => {

  let client = new CoinClient("https://localhost:5001");
  let response = await client.getCoinsWithPagination(1,10,0);
  return response;
};   

function HomePage() {
  const [coins, setCoins] = useState(0);
  useEffect(() => {
    console.log("test");
    callApi().then(data => 
    {
      setCoins(data.items);
    });
    
  }, []);
  return (
    <div>
      <TableComponent
        tableHead={tableHead}
        tableData={coins}
        coinsType={coinsType[0]}
      />
      <TableComponent
        tableHead={tableHead}
        tableData={coins}
        coinsType={coinsType[1]}
      />
      <TextCardComponent />
    </div>
  );
}

export default HomePage;
