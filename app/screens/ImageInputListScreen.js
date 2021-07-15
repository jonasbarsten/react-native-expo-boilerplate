import React, { useState } from "react";
import MyImageInputList from "../components/MyImageInputList";
import MyScreen from "../components/MyScreen";

function ImageInputListScreen(props) {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <MyScreen>
      <MyImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </MyScreen>
  );
}

export default ImageInputListScreen;
