import React from "react";
import { HeaderComp, LogoHeader } from "./HeaderStyledElements.js";
import InputBar from "../InputBar/InputBar";
import { Button } from "../../elements/HeaderButton";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <HeaderComp>
      <Link to='/'>
        <LogoHeader src="../../assets/logoPng.png" />
      </Link>
      {props.data && <InputBar options = {props.data}  />}
      <Link to='/listed'>
      <Button width='170px' height='50px' font-size='18px' tableButton={false}>Submit Coin</Button>
      </Link>
    </HeaderComp>
  );
};

export default Header;