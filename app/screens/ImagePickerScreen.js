import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

function ImagePickerScreen(props) {
  /*   const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("Enable permissions to give access to the library");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []); */

  return <View style={styles.container}>Hello</View>;
}

const styles = StyleSheet.create({
  container: {},
});

export default ImagePickerScreen;
