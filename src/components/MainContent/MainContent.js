import React, { useState, useEffect } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";

const MainContent = () => {
  const [modelIsLoading, setModelIsLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [image, setImage] = useState(null);

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

  return (
    <div>
      <h1>Main Page</h1>
      {model && <h2>Model loaded</h2>}
    </div>
  );
}

export default MainContent;
