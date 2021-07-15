import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MyScreen from "../components/MyScreen";
import MyIcon from "../components/MyIcon";
import MyListItem from "../components/MyListItem";

function IconsScreen(props) {
  // Icon in list

  return (
    <MyScreen>
      <MyListItem
        title="My title"
        subTitle="My subtitle"
        IconComponent={<MyIcon name="email" />}
      />
    </MyScreen>
  );

  // Single Icon

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconsScreen;
