// For platform specific code, do it either like this
// Or with the naming convention xxx.android.js / xxx.ios.js

import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

function MyText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default MyText;
