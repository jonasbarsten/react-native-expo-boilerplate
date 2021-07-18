import React, { useContext, useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import MyScreen from "../components/MyScreen";
import {
  MyForm,
  MySubmitButton,
  MyFormField,
  MyErrorMessage,
} from "../components/forms";
import authApi from "../api/auth";

import defaultStyles from "../config/styles";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    authContext.setUser(user);
    authStorage.storeToken(result.data);
  };

  return (
    <MyScreen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <MyForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <MyErrorMessage
          error="Invalid email and/or password"
          visible={loginFailed}
        />
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
