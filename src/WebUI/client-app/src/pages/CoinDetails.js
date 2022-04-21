import React, { useState,useEffect  }  from 'react'
import CoinDetailsComponent from '../components/CoinDetailsComponent/CoinDetailsComponent'
import TableComponent from '../components/TableComponent/TableComponent'
import {
  useParams
} from "react-router-dom";
import {CoinClient} from "../components/SheloCkoinApi.ts"
import configData from "./../config.json"

const SERVER_URL = configData.REACT_APP_SERVER_URL;


const callApi = async (coinId, userIP) => {
  let client = new CoinClient(SERVER_URL);
  let response = await client.getCoinDetails(coinId, userIP);
  return response;
};


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

function CoinDetails(props) {
  const [coinDetails, setCoinDetails] = useState();
  const [wasVoted, setWasVoted] = useState();
  const {id} = useParams();

  useEffect(() => {
      callApi(id, props.userIP).then(res => {
        setCoinDetails(res)
      }
        );
  }, [id, props.userIP, wasVoted]);

  function handleVote(item)
  {
    props.handleVote(item);
    setWasVoted(true);
  }

  return (
      <>
        {coinDetails && <CoinDetailsComponent 
          coinDetails={coinDetails}
          handleVote = {(item) => handleVote(item)} />}
        <TableComponent
        tableHead={tableHead}
        tableData={props.coins}
        coinsType={coinsType[0]}/>
    </>
  )
}

export default CoinDetails