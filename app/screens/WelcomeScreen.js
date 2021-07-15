import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import MyButton from "../components/MyButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell what you dont need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <MyButton title="Login" onPress={() => console.log("Tapped ...")} />
        <MyButton
          title="Register"
          color="secondary"
          onPress={() => console.log("Tapped ...")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
