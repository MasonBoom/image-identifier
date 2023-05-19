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
} from "./mainContent.styles";
import * as mobilenet from "@tensorflow-models/mobilenet";

const MainContent = () => {
  const [modelIsLoading, setModelIsLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [image, setImage] = useState(null);
  const [results, setResults] = useState([]);
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
    } else {
      setImage(null);
    }
  }

  const imageIdentify = async () => {
    const results = await model.classify(imageRef.current);
    setResults(results);
  }

  const handleChange = (e) => {
    setImage(e.target.value);
    setResults([]);
  }

  const fetchRandomImage = async () => {
    
  }

  useEffect(() => {
    loadModel();
  }, []);

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
    </>
  );
}

export default MainContent;
