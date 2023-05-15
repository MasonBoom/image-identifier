import React from "react";
import {
  HeaderContainer,
  LogoContainer,
} from "./header.styles";
import logo from "../../icons/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
    </HeaderContainer>
  );
}

export default Header;
