import React from "react";
import { View, Image, StyleSheet } from "react-native";

import MyText from "../components/MyText";
import MyListItem from "../components/MyListItem";
import defaultStyles from "../config/styles";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <MyText style={styles.title}>Red jacket for sale</MyText>
        <MyText style={styles.price}>$100</MyText>
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
