import React from "react";
import { StyleSheet } from "react-native";

import MyText from "../MyText";

function MyErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <MyText style={styles.error}>{error}</MyText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default MyErrorMessage;
