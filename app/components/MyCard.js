import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

// Offline support for images
import { Image } from "react-native-expo-image-cache";

import MyText from "./MyText";
import defaultStyles from "../config/styles";

function MyCard({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          uri={imageUrl}
          style={styles.image}
          preview={{ uri: thumbnailUrl }}
          tint="light"
        />
        <View style={styles.detailedContainer}>
          <MyText style={styles.title}>{title}</MyText>
          <MyText style={styles.subTitle}>{subTitle}</MyText>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
