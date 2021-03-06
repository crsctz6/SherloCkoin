import React, { useState,useEffect  } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinDetails from "./pages/CoinDetails";
import GetListed from "./pages/GetListed";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import { Button } from "./elements/ButtonElement";
import {CoinClient, VoteClient} from "./components/SheloCkoinApi.ts"
import axios from 'axios'
import configData from "./config.json"

const SERVER_URL = configData.REACT_APP_SERVER_URL;
const GET_IP_SERVER = configData.REACT_APP_GET_USERIP_URL;

const voteRequest = async (userIp, coinId) => {
  let voteClient = new VoteClient(SERVER_URL);
  let request =
    {
      userIP : userIp,
      coinId : coinId
    }
  return await voteClient.create(request); 
};

function App() {
  const [coins, setCoins] = useState(0);
  const [userIp, setUserIp] = useState("");
  const [wasVote, setWasVote] = useState(0);
  const [coinsToSearch, setCoinsToSearch] = useState();
  function handleVoteClick(item) {
    voteRequest(userIp, item.id).then(res => 
      {
        setWasVote(res);
      });
  }
  useEffect(() => {
    const getSearchData = async () => {
      let client = new CoinClient(SERVER_URL);
      let response = await client.getCoinsForSearch();
      return response;
    };
    getSearchData().then(res => 
      {
        setCoinsToSearch(res);
    });
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      let userData = await  axios.get(GET_IP_SERVER)
      return userData.data.IPv4; 
    };

    getUserData().then(res => 
      {
      setUserIp(res);
    });
  }, []);
  
  useEffect(() => {
    const callApi = async (userIp) => {
      let client = new CoinClient(SERVER_URL);
      let response = await client.getCoinsWithPagination(1,10,userIp);
      return response;
    };

    function handleVoteClick1(item) {
      voteRequest(userIp, item.id).then(res => 
        {
          setWasVote(res);
        });
    }

    callApi(userIp).then(data => 
    {
      setCoins(data.items.map((item) => {
        item.button = !item.isVoted && <Button tableButton={true} onClick={() => handleVoteClick1(item)}>Vote</Button>
        item.logo = <img src={item.logo} height="30px" width = "30px" alt="logoCoin"/>
        item.marketCap = item.marketCap.toLocaleString()
        return item
      }));
    });
  }, [userIp, wasVote,]);



  return (
    <BrowserRouter>
      <Header data ={coinsToSearch} />
      <Routes>
        <Route path="/" element={<HomePage coins = {coins} />} />
        <Route path="details/:id" element={<CoinDetails coins = {coins} userIP = {userIp} handleVote = {(item) => handleVoteClick(item)} />} />
        <Route path="listed" element={<GetListed  />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
