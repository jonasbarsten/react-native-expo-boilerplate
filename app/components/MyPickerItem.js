import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import MyText from "./MyText";

function MyPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <MyText style={styles.text}>{item.label}</MyText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default MyPickerItem;
