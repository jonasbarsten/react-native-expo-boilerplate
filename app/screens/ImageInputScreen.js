import React, { useState } from "react";

import MyImageInput from "../components/MyImageInput";
import MyScreen from "../components/MyScreen";

function ImageInputScreen(props) {
  const [imageUri, setImageUri] = useState();

  return (
    <MyScreen>
      <MyImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </MyScreen>
  );
}

export default ImageInputScreen;
