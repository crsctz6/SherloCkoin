import React,  { useState,useEffect  } from "react";
import "../App.css";
import TableComponent from "../components/TableComponent/TableComponent";
import TextCardComponent from "../components/TextCardComponent/TextCardComponent";
import { Button } from "../elements/ButtonElement";
import Header from "../components/Header/Header";
import {CoinClient, VoteClient} from "../components/SheloCkoinApi.ts"
import axios from 'axios'
import configData from "../config.json"

const SERVER_URL = configData.REACT_APP_SERVER_URL;
const GET_IP_SERVER = configData.REACT_APP_GET_USERIP_URL;

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

const callApi = async (userIp) => {
  let client = new CoinClient(SERVER_URL);
  let response = await client.getCoinsWithPagination(1,10,userIp);
  return response;
};

const voteRequest = async (userIp, coinId) => {
  let voteClient = new VoteClient(SERVER_URL);
  let request =
    {
      userIP : userIp,
      coinId : coinId
    }
  return await voteClient.create(request); 
};
const getUserData = async () => {
  let userData = await  axios.get(GET_IP_SERVER)
  return userData.data.IPv4; 
};

function HomePage() {
  const [coins, setCoins] = useState(0);
  const [userIp, setUserIp] = useState("");
  const [wasVote, setWasVote] = useState(0);
  function handleVoteClick(item) {
    voteRequest(userIp, item.id).then(res => 
      {
        console.log(res);
        setWasVote(res);
      });
  }
  useEffect(() => {
    getUserData().then(res => setUserIp(res));
  }, [])
  useEffect(() => {
    callApi(userIp).then(data => 
    {
      setCoins(data.items.map((item) => {
        item.button = !item.isVoted && <Button tableButton={true} onClick={() => handleVoteClick(item)}>Vote</Button>
        item.logo = <img src={item.logo} height="30px" width = "30px"/>
        return item
      }));
    });
  }, [userIp, wasVote]);

  
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
