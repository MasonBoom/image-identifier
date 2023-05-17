import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  Title,
} from "./header.styles";
import logo from "../../icons/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
      <Title>Image Identifier</Title>
    </HeaderContainer>
  );
}

export default Header;
