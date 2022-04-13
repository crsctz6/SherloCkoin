import React from "react";
import { HeaderComp, LogoHeader } from "./HeaderStyledElements.js";
import InputBar from "../InputBar/InputBar";
import Button from "../Button/Button";

const Header = () => {
  return (
    <HeaderComp>
      <LogoHeader src="../../assets/logoPng.png" />
      <InputBar />
      <Button />
    </HeaderComp>
  );
};

export default Header;
