import React from "react";
import { View, Text, StyleSheet } from "react-native";

function StylingTextScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        I love react native. This is my first react native app. Here is some
        more text
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // fontSize here will not work.
    // Unlike in CSS we do not have style inheritance
    // For global styles, see EncapsulatingStylesScreen.js
  },
  text: {
    // Google: "expo custom fonts" for custom fonts
    // List of system fonts on iOS and Android: https://github.com/react-native-training/react-native-fonts
    fontFamily: "Courier",
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "600",
    // fontWeight: "bold"
    color: "tomato",
    textTransform: "capitalize",
    textDecorationLine: "line-through",
    textAlign: "justify",
    lineHeight: 60,
  },
});

export default StylingTextScreen;
