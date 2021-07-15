import React from "react";
import { View, Image, StyleSheet } from "react-native";

import MyText from "./MyText";
import defaultStyles from "../config/styles";

function MyCard({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailedContainer}>
        <MyText style={styles.title}>{title}</MyText>
        <MyText style={styles.subTitle}>{subTitle}</MyText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailedContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: defaultStyles.colors.secondary,
    fontWeight: "bold",
  },
});

export default MyCard;
