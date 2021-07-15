import React, { useState } from "react";
import { TextInput, Text } from "react-native";

import MyScreen from "../components/MyScreen";
import MyTextInput from "../components/MyTextInput";

function TextInputScreen(props) {
  const [firstName, setFirstName] = useState("");

  return (
    <MyScreen>
      <MyTextInput placeholder="Username" icon="email" />
    </MyScreen>
  );

  return (
    <MyScreen>
      <Text>{firstName}</Text>
      <TextInput
        maxLength={10}
        keyboardType="numeric"
        // Password input style
        secureTextEntry={true}
        // Only iOS
        clearButtonMode="always"
        onChangeText={(text) => setFirstName(text)}
        placeholder="First name"
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      />
    </MyScreen>
  );
}

export default TextInputScreen;
