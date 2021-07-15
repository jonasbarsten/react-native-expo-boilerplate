import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import MyScreen from "../components/MyScreen";
import { MyForm, MySubmitButton, MyFormField } from "../components/forms";

import defaultStyles from "../config/styles";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <MyScreen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <MyForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <MyFormField
          name="email"
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          // Only iOS: auto fill from keychain
          textContentType="emailAddress"
        />
        <MyFormField
          autoCapitalize="none"
          name="password"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry={true}
          // Only iOS: auto fill from keychain
          textContentType="password"
        />
        <MySubmitButton title="Login" />
      </MyForm>
    </MyScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  errors: {
    color: defaultStyles.colors.danger,
  },
});

export default LoginScreen;
