import React from "react";
import { HeaderComp, LogoHeader } from "./HeaderStyledElements.js";
import InputBar from "../InputBar/InputBar";
import { Button } from "../../elements/HeaderButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderComp>
      <Link to='/'>
        <LogoHeader src="../../assets/logoPng.png" />
      </Link>
      <InputBar />
      <Button width='170px' height='50px' font-size='18px' tableButton={false}>Submit Coin</Button>
    </HeaderComp>
  );
};

export default Header;