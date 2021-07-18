import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";

import MyScreen from "../components/MyScreen";
import {
  MyForm,
  MyFormField,
  MyErrorMessage,
  MySubmitButton,
} from "../components/forms";
import MyActivityIndicator from "../components/MyActivityIndicator";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string().required().min(1).label("Name"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const { logIn } = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );

    logIn(authToken);
  };

  return (
    <>
      <MyActivityIndicator visible={registerApi.loading || loginApi.loading} />
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
