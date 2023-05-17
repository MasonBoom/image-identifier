import styled from "styled-components";

export const InputContainer = styled.label`
  display: block;
  margin: auto;
  margin-top: 25px;
  padding: 10px 25px;
  border: none;
  border-radius: 25px;
  background-color: #0DCEDA;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Poppins';
  margin-bottom: 50px;
  width: 200px;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: #0DFFFA;
    color: #fff;
    box-shadow: 0px 2px 5px #000;
  }

  input {
    display: none;
  }
`;

export const MainContainer = styled.main``;

export const SubContent = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 500px;
  height: 700px;
  border: 5px solid #0DCEDA;
  justify-content: center;
  align-items: center;

  &.resultsRendered {
    border-right: none;
  }

  img {
    width: 100%;
    max-height: 100%;
  }
`;

export const ImgIdButton = styled.button`
  display: block;
  margin: auto;
  margin-top: 25px;
  padding: 10px 25px;
  border: none;
  border-radius: 25px;
  background-color: #0DCEDA;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Poppins';
  margin-bottom: 50px;

  &:hover {
    cursor: pointer;
    background-color: #0DFFFA;
    color: #fff;
    box-shadow: 0px 2px 5px #000;
  }
`;

export const ResultsContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 700px;
  border: 5px solid #0DCEDA;

  div {
    display: flex;
    flex-direction: column;
  }
`;
