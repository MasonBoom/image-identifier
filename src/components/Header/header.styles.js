import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 150px;
  margin-bottom: 25px;
  margin-left: -10px;
  margin-top: -10px;
  width: 99.4vw;
  background-color: #0DCEDA;
  border-radius: 0px 0px 25px 25px;
`;

export const LogoContainer = styled.figure`
  width: 130px;
  height: 100px;
  margin-left: 25px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: auto;
  padding-right: 7vw;
  font-weight: 700;
  color: #fff;
  text-shadow: 0px 0px 5px #000;
  text-align: center;
  font-family: 'Poppins';
  letter-spacing: 0.3rem;
`;
