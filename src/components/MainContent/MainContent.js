import React, { useState, useEffect, useRef } from "react";
import { 
  InputContainer,
  MainContainer,
  SubContent,
  ImageContainer,
} from "./mainContent.styles";
import * as mobilenet from "@tensorflow-models/mobilenet";

const MainContent = () => {
  const [modelIsLoading, setModelIsLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [image, setImage] = useState(null);
  const imageRef = useRef();

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

  console.log(image)

  return (
    <>
      <h1>Main Page</h1>
      {model && <h2>Model loaded</h2>}
      <InputContainer>
        <input 
          type="file" 
          accept="image/*"
          capture="camera"
          onChange={imageUpload}
        />
      </InputContainer>
      <MainContainer>
        <SubContent>
          <ImageContainer>
            {image && <img 
              src={image} 
              alt="upload-preview" 
              crossOrigin="anonymous" 
              ref={imageRef}
            />}
          </ImageContainer>
        </SubContent>
        {image && <button>Identify Image</button>}
      </MainContainer>
    </>
  );
}

export default MainContent;
