import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import MyIcon from "./MyIcon";
import MyText from "./MyText";

function MyPickerItemCategory({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MyIcon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <MyText style={styles.label}>{item.label}</MyText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default MyPickerItemCategory;
