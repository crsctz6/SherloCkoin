import React from "react";
import "../App.css";
import TableComponent from "../components/TableComponent/TableComponent";
import TextCardComponent from "../components/TextCardComponent/TextCardComponent";
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

function HomePage(props) {
  return (
    <div>
      <TableComponent
        tableHead={tableHead}
        tableData={props.coins}
        coinsType={coinsType[0]}
      />
      <TableComponent
        tableHead={tableHead}
        tableData={props.coins}
        coinsType={coinsType[1]}
      />
      <TextCardComponent />
    </div>
  );
}

export default HomePage;
