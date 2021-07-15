import React from "react";
import { View, StyleSheet } from "react-native";

import MyCard from "../components/MyCard";

function CardsContainerScreen(props) {
  return (
    <View style={styles.container}>
      <MyCard
        title="Red jacket for sale"
        subTitle="$100"
        image={require("../assets/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});

export default CardsContainerScreen;
