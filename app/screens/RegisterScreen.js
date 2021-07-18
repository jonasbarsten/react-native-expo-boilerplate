import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import MyScreen from "../components/MyScreen";
import {
  MyForm,
  MyFormField,
  MyErrorMessage,
  MySubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string().required().min(1).label("Name"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  const { logIn } = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await usersApi.register(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password
    );

    logIn(authToken);
  };

  return (
    <MyScreen>
      <MyForm
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <MyErrorMessage error={error} visible={!!error} />
        <MyFormField
          name="name"
          placeholder="Name"
          icon="account"
          autoCorrect={false}
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
        <MySubmitButton title="Register" />
      </MyForm>
    </MyScreen>
  );

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
