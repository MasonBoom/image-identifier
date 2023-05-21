import React, { useState, useEffect, useRef } from "react";
import { 
  ImgUpload,
  ImgSelectionContainer,
  SubContent,
  ImageContainer,
  ImgIdButton,
  ResultsContainer,
  Or,
  PasteImgUrl,
  ButtonDescription,
  RandomImgButton,
  RecentPredictions,
  RecentPredictionsContainer,
} from "./mainContent.styles";
import * as mobilenet from "@tensorflow-models/mobilenet";

const MainContent = () => {
  const [modelIsLoading, setModelIsLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [image, setImage] = useState(null);
  const [results, setResults] = useState([]);
  const [recentPredictions, setRecentPredictions] = useState([]);

  const imageRef = useRef();
  const textInputRef = useRef();

  const loadModel = async () => {
    setModelIsLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setModelIsLoading(false);
    } catch (error) {
      console.log(error);
      setModelIsLoading(false);
    }
  }

  const imageUpload = (e) => {
    const { files } = e.target;
    if(files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImage(url);
      imageRef.current.value = '';
      setResults([]);
    } else {
      setImage(null);
    }
  }

  const imageIdentify = async () => {
    textInputRef.current.value = '';
    const results = await model.classify(imageRef.current);
    setResults(results);
  }

  const handleChange = (e) => {
    setImage(e.target.value);
    setResults([]);
  }

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://api.unsplash.com/photos/random?client_id=u9bjttyGiy2VxYlRg7Ewf9NBTa31APRgNYGXqziVbb8');
      const data = await response.json();
      setImage(data.urls.regular);
      setResults([]);
    } catch (error) {
      console.log('Error fetching random image:', error);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  useEffect(() => {
    if (image) {
      setRecentPredictions((prevPredictions) => [...prevPredictions, image].reverse());
    }
  }, [image, setRecentPredictions]);

  if(modelIsLoading) {
    return (
      <div>
        <h1>Model loading...</h1>
      </div>
    );
  }

  console.log(results)

  return (
    <>
      {model && <h2>Model loaded</h2>}
      <ImgSelectionContainer>
        <ImgUpload>
          <input 
            type="file" 
            accept="image/*"
            capture="camera"
            onChange={imageUpload}
          />
          Upload Image
        </ImgUpload>
        <Or>Or</Or>
        <PasteImgUrl ref={textInputRef} onChange={handleChange} />
      </ImgSelectionContainer>
      <ButtonDescription>Don't have any images? Click the button below!</ButtonDescription>
      <RandomImgButton onClick={fetchRandomImage}>Get Random Image</RandomImgButton>
      <main>
        <SubContent>
          <ImageContainer>
            {image && <img 
              src={image} 
              alt="upload-preview" 
              crossOrigin="anonymous" 
              ref={imageRef}
            />}
          </ImageContainer>
          {results.length > 0 && (
            <ResultsContainer>
              {results.map((result, index) => {
                return (
                  <div key={index}>
                    <span>{result.className.toUpperCase()}</span>
                    <span>Confidence level: {(result.probability * 100).toFixed(2)} %</span>
                    {index === 0 && <span className="bestGuess">Best Guess</span>}
                  </div>
                );
              })}
            </ResultsContainer>
          )}
        </SubContent>
        {image && <ImgIdButton onClick={imageIdentify}>Identify Image</ImgIdButton>}
      </main>
      {recentPredictions.length > 0 && 
        <RecentPredictions>
          <h2>Recent Images</h2>
          <RecentPredictionsContainer>
            {recentPredictions.map((prediction, index) => {
              return (
                <div key={index} className="imgContainer">
                  <img src={prediction} alt="Recent prediction" />
                </div>
              );
            })}
          </RecentPredictionsContainer>
        </RecentPredictions>
      }
    </>
  );
}

export default MainContent;
