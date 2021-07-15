import React from "react";
import { View, StyleSheet } from "react-native";

function ShadowsScreen(props) {
  return <View style={styles.shadows}></View>;
}

const styles = StyleSheet.create({
  shadows: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    // iOS
    shadowColor: "grey",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    // Android
    // Not much control over shadows
    elevation: 20,
  },
});

export default ShadowsScreen;
