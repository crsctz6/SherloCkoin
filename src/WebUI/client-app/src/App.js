import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinDetails from "./pages/CoinDetails";
import GetListed from "./pages/GetListed";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import FooterComponent from "./components/FooterComponent/FooterComponent";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="details" element={<CoinDetails />} />
        <Route path="listed" element={<GetListed />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
