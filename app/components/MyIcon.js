import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function MyIcon({
  name,
  size = 40,
  backgroundColor = defaultStyles.colors.black,
  iconColor = defaultStyles.colors.white,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.5,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default MyIcon;
