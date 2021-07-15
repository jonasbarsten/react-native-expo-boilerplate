import React, { useEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import MyText from "../components/MyText";
import MyScreen from "../components/MyScreen";
import MyButton from "../components/MyButton";

function ImagePickerScreen(props) {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("Enable permissions to give access to the library");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // What? is this?

  return (
    <MyScreen>
      <MyButton title="Select image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </MyScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ImagePickerScreen;
