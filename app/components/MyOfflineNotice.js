import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import MyText from "./MyText";

import defaultStyles from "../config/styles";

function MyOfflineNotice(props) {
  const netInfo = useNetInfo();

  // Comparing to "false" since it is "null" while loading
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <MyText style={styles.text}>No internet connection</MyText>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.primary,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    width: "100%",
    top: Constants.statusBarHeight,
  },
  text: {
    color: defaultStyles.colors.white,
  },
});

export default MyOfflineNotice;
