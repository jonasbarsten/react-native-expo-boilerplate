import React from "react";
import { View, StyleSheet } from "react-native";

function PaddingsAndMarginsScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.boxOne}>
        <View style={styles.itemOne}></View>
      </View>
      <View style={styles.boxTwo}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boxOne: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    padding: 20,
    // These override the previous one
    paddingHorizontal: 10,
    // paddingVertical: 10,
    paddingLeft: 30,
  },
  boxTwo: {
    backgroundColor: "tomato",
    width: 100,
    height: 100,
    margin: 20,
    // These override the previous one
    /*     marginVertical: 10,
    marginHorizontal: 10,
    marginLeft: 10,
    marginRight: 10, */
  },
  itemOne: {
    backgroundColor: "gold",
    width: 50,
    height: 50,
  },
});

export default PaddingsAndMarginsScreen;
