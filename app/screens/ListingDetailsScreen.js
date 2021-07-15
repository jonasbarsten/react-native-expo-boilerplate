import React from "react";
import { View, Image, StyleSheet } from "react-native";

import MyText from "../components/MyText";
import MyListItem from "../components/MyListItem";
import defaultStyles from "../config/styles";

function ListingDetailsScreen({ route }) {
  // Just for demo purposes to make this component show on its own
  let listing = {
    image: require("../assets/jacket.jpg"),
    price: 100,
    title: "Red jacket for sale",
  };

  if (route?.params) {
    listing = route.params;
  }

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
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
