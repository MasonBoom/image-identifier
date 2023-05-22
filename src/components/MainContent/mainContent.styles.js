import styled from "styled-components";

export const ImgUpload = styled.label`
  display: block;
  margin: auto;
  padding: 10px 25px;
  border: none;
  border-radius: 25px;
  background-color: #0DCEDA;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Poppins';
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

export const ImgSelectionContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 700px;
  margin: auto;
`;

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
  width: 700px;
  height: 700px;

  align-items: center;
  justify-content: center;
  font-family: 'Poppins';

  div {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 120px;
    border: 2px solid #0DCEDA;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    position: relative;

    &:first-child {
      background-color: #0DCEDA;
    }

    span {

      &:first-child {
        font-size: 1.5rem;
        font-weight: 700;
      }

      &:nth-child(2) {
        font-size: 1.2rem;
        font-weight: 500;
      }
      
      &.bestGuess {
        position: absolute;
        bottom: 10px;
        left: 10px;
        background-color: #fff;
        padding: 5px;
        border-radius: 5px;
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
  }
`;

export const Or = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  align-self: center;
  text-align: center;
  font-family: 'Poppins';
`;

export const PasteImgUrl = styled.input.attrs(props => ({
    type: "text",
    placeholder: "Paste Image URL",
  }))`
  align-self: center;
  display: block;
  margin: auto;
  padding: 10px 25px;
  border: none;
  border-radius: 25px;
  background-color: #0DCEDA;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Poppins';
  width: 200px;
  text-align: center;
  border: none; 

  &:hover {
    cursor: pointer;
    background-color: #0DFFFA;
    color: #fff;
    box-shadow: 0px 2px 5px #000;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fff;
  }
`;

export const RandomImgButton = styled.button`
  align-self: center;
  display: block;
  margin: auto;
  padding: 10px 25px;
  border: none;
  border-radius: 25px;
  background-color: #0DCEDA;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Poppins';
  margin-bottom: 30px;
  margin-top: 30px;
  width: 400px;
  text-align: center;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: #0DFFFA;
    color: #fff;
    box-shadow: 0px 2px 5px #000;
  }
`;

export const ButtonDescription = styled(Or)`
  font-size: 1.2rem;
`;

export const RecentPredictions = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  margin-bottom: 80px;
  align-items: center;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    align-self: center;
    text-align: center;
    font-family: 'Poppins';
  }
`;

export const RecentPredictionsContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: auto;
  overflow-x: scroll;
  
  .imgContainer {
    display: flex;
    width: 300px;
    height: 300px;
    border: 2px solid #0DCEDA;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }

  img {
    width: 100%;
    max-height: 100%;
    border-radius: 10px;
  }
`;
