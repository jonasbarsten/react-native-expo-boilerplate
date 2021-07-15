import React from "react";
import { View, StyleSheet } from "react-native";

function BordersScreen(props) {
  return <View style={styles.borders}></View>;
}

const styles = StyleSheet.create({
  borders: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "royalblue",
    /*     borderRadius: 10,
    borderTopWidth: 20,
    borderTopLeftRadius: 50, */
    borderRadius: 50,
  },
});

export default BordersScreen;
