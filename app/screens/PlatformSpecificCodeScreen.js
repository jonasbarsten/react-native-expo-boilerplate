// See ../components/MyText

import React from "react";
import { StyleSheet, View } from "react-native";

import MyText from "../components/MyText";

function PlatformSpecificCodeScreen(props) {
  return (
    <View style={styles.container}>
      <MyText>I love react native again</MyText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlatformSpecificCodeScreen;
