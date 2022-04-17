import React from 'react'
import Header from '../components/Header/Header'
import CoinDetailsComponent from '../components/CoinDetailsComponent/CoinDetailsComponent'
import FooterComponent from '../components/FooterComponent/FooterComponent'
import TableComponent from '../components/TableComponent/TableComponent'
import { Button } from '../elements/HeaderButton'
const tableData = [
  {
    no: "1",
    logo: "Logo",
    naming: "Ethereum",
    cap: "$ 300,001,69",
    price: "$ 41,001",
    launch: "12 days",
    votes: "511,000",
    button: <Button tableButton={true}>Vote</Button>,
  },
  {
    no: "2",
    logo: "Logo",
    naming: "Ethereum",
    cap: "$ 300,001,69",
    price: "$ 41,001",
    launch: "12 days",
    votes: "511,000",
    button: <Button tableButton={true}>Vote</Button>,
  },
  {
    no: "3",
    logo: "Logo",
    naming: "Ethereum",
    cap: "$ 300,001,69",
    price: "$ 41,001",
    launch: "12 days",
    votes: "511,000",
    button: <Button tableButton={true}>Vote</Button>,
  },
  {
    no: "4",
    logo: "Logo",
    naming: "Ethereum",
    cap: "$ 300,001,69",
    price: "$ 41,001",
    launch: "12 days",
    votes: "511,000",
    button: <Button tableButton={true}>Vote</Button>,
  },
  {
    no: "5",
    logo: "Logo",
    naming: "Ethereum",
    cap: "$ 300,001,69",
    price: "$ 41,001",
    launch: "12 days",
    votes: "511,000",
    button: <Button tableButton={true}>Vote</Button>,
  },
  {
    no: "6",
    logo: "Logo",
    naming: "Ethereum",
    cap: "$ 300,001,69",
    price: "$ 41,001",
    launch: "12 days",
    votes: "511,000",
    button: <Button tableButton={true}>Vote</Button>,
  },
  {
    no: "7",
    logo: "Logo",
    naming: "Ethereum",
    cap: "$ 300,001,69",
    price: "$ 41,001",
    launch: "12 days",
    votes: "511,000",
    button: <Button tableButton={true}>Vote</Button>,
  },
];

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

function CoinDetails() {
  return (
      <>
        <Header/>
        <CoinDetailsComponent/>
        <TableComponent
        tableHead={tableHead}
        tableData={tableData}
        coinsType={coinsType[0]}
      />
        <FooterComponent/>
    </>
  )
}

export default CoinDetails