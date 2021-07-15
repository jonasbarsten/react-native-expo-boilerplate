import React from "react";
import { View, Image, StyleSheet } from "react-native";

import MyText from "../components/MyText";
import MyListItem from "../components/MyListItem";
import defaultStyles from "../config/styles";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={{ uri: listing.images[0].url }} />
      <View style={styles.detailsContainer}>
        <MyText style={styles.title}>{listing.title}</MyText>
        <MyText style={styles.price}>${listing.price}</MyText>
        <View style={styles.userContainer}>
          <MyListItem
            image={require("../assets/mosh.jpg")}
            title="Jonas Barsten"
            subTitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: defaultStyles.colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
