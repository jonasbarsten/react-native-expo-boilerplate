import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function MyActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MyActivityIndicator;
