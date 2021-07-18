import React from "react";
import { View, StyleSheet } from "react-native";

import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";

function RegisterScreen(props) {
  return (
    <View style={styles.container}>
      <MyTextInput placeholder="Name" icon="account" />
      <MyTextInput
        placeholder="Email"
        icon="email"
        autoCapitalize={false}
        keyboardType="email-address"
      />
      <MyTextInput placeholder="Password" icon="lock" secureTextEntry={true} />
      <MyButton title="Register" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
