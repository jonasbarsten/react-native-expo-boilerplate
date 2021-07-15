import React from "react";
import { View, StyleSheet } from "react-native";

import MyText from "../components/MyText";

function EncapsulatingStylesScreen(props) {
  return (
    <View style={styles.container}>
      <MyText>I love React Native</MyText>
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

export default EncapsulatingStylesScreen;
